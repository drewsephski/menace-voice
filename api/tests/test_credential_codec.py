import base64
import hashlib
import json
import logging
import secrets

import pytest

from api.services.security.credential_codec import (
    ALGORITHM,
    ENVELOPE_VERSION,
    CredentialKeyConfigurationError,
    CredentialSecretCodec,
    CredentialSecretDecryptionError,
    CredentialSecretEnvelopeError,
    CredentialSecretKeyUnavailableError,
    JsonValue,
    SecretValueState,
    classify_secret_value,
    load_credential_keyring,
    load_credential_keyring_from_environment,
)


def _encoded_key(start: int) -> str:
    raw = hashlib.sha256(f"credential-codec-test-key-{start}".encode()).digest()
    return base64.urlsafe_b64encode(raw).decode("ascii").rstrip("=")


def _tamper(encoded: str) -> str:
    replacement = "A" if encoded[-1] != "A" else "B"
    return f"{encoded[:-1]}{replacement}"


def test_ciphertext_is_randomized_and_round_trips_supported_values():
    codec = CredentialSecretCodec(load_credential_keyring(_encoded_key(0), None))
    values = [
        "synthetic-secret",
        ["first-secret", "second-secret"],
        {
            "api_key": "nested-secret",
            "oauth": {"client_secret": "deeper-secret"},
            "scopes": ["calls:read", "calls:write"],
        },
    ]

    for value in values:
        first = codec.encrypt(value)
        second = codec.encrypt(value)

        assert first != second
        assert first["version"] == ENVELOPE_VERSION
        assert first["algorithm"] == ALGORITHM
        assert first["key_id"] == codec.current_key_id
        assert first["nonce"] != second["nonce"]
        assert codec.decrypt(first) == value


def test_tamper_and_wrong_key_are_rejected_without_secret_disclosure(caplog):
    marker = "SYNTHETIC-TAMPER-MARKER"
    writer = CredentialSecretCodec(load_credential_keyring(_encoded_key(0), None))
    envelope = writer.encrypt({"token": marker})
    tampered = dict(envelope, ciphertext=_tamper(envelope["ciphertext"]))

    with caplog.at_level(logging.DEBUG):
        with pytest.raises(CredentialSecretDecryptionError) as tamper_error:
            writer.decrypt(tampered)
        with pytest.raises(CredentialSecretDecryptionError) as wrong_key_error:
            CredentialSecretCodec(
                load_credential_keyring(_encoded_key(32), None)
            ).decrypt(envelope)

    combined_output = "\n".join(
        [str(tamper_error.value), str(wrong_key_error.value), caplog.text]
    )
    assert marker not in combined_output
    assert envelope["ciphertext"] not in combined_output


def test_rotation_reads_previous_key_and_writes_only_with_current_key():
    old_codec = CredentialSecretCodec(load_credential_keyring(_encoded_key(0), None))
    old_envelope = old_codec.encrypt("rotation-secret")
    rotated = CredentialSecretCodec(
        load_credential_keyring(_encoded_key(32), _encoded_key(0))
    )

    assert rotated.decrypt(old_envelope) == "rotation-secret"
    new_envelope = rotated.encrypt("rotation-secret")
    assert new_envelope["key_id"] == rotated.current_key_id
    assert new_envelope["key_id"] != old_envelope["key_id"]
    with pytest.raises(CredentialSecretDecryptionError):
        CredentialSecretCodec(load_credential_keyring(_encoded_key(32), None)).decrypt(
            old_envelope
        )


@pytest.mark.parametrize("current", [None, "", "change-me-in-production"])
def test_production_rejects_missing_empty_and_default_keys(current):
    environ = {"ENVIRONMENT": "production"}
    if current is not None:
        environ["CREDENTIAL_ENCRYPTION_KEY"] = current
    with pytest.raises(CredentialKeyConfigurationError):
        load_credential_keyring_from_environment(environ)


def test_production_rejects_low_entropy_and_malformed_keys():
    repeated = base64.urlsafe_b64encode(b"x" * 32).decode("ascii")
    incrementing = base64.urlsafe_b64encode(bytes(range(32))).decode("ascii")
    ordered_ascii = base64.urlsafe_b64encode(
        b"0123456789abcdefghijklmnopqrstuv"
    ).decode("ascii")

    for invalid in (
        "not-base64!",
        repeated,
        incrementing,
        ordered_ascii,
        _encoded_key(0)[:-1],
    ):
        with pytest.raises(CredentialKeyConfigurationError) as error:
            load_credential_keyring(invalid, None, require_current=True)
        assert invalid not in str(error.value)


def test_production_accepts_cryptographically_generated_key():
    generated = base64.urlsafe_b64encode(secrets.token_bytes(32)).decode("ascii")

    keyring = load_credential_keyring(generated, None, require_current=True)

    assert keyring.current is not None


def test_missing_key_allows_legacy_detection_but_explicitly_rejects_writes() -> None:
    codec = CredentialSecretCodec(load_credential_keyring(None, None))
    legacy: JsonValue = {"api_key": "legacy-secret"}

    assert classify_secret_value(legacy) is SecretValueState.LEGACY_PLAINTEXT
    with pytest.raises(CredentialSecretKeyUnavailableError):
        codec.encrypt(legacy)
    with pytest.raises(CredentialSecretEnvelopeError):
        codec.decrypt(legacy)


def test_legacy_object_with_incidental_envelope_field_is_not_misclassified():
    legacy = {"ciphertext": "provider-owned-value", "account_id": "acct-test"}

    assert classify_secret_value(legacy) is SecretValueState.LEGACY_PLAINTEXT


def test_malformed_and_unknown_envelopes_fail_closed():
    codec = CredentialSecretCodec(load_credential_keyring(_encoded_key(0), None))
    marker = "SYNTHETIC-MALFORMED-MARKER"
    valid = codec.encrypt(marker)
    cases = [
        dict(valid, version=999),
        dict(valid, algorithm="unknown"),
        dict(valid, key_id="missing-key"),
        {"version": ENVELOPE_VERSION, "algorithm": ALGORITHM},
        dict(valid, nonce="!invalid!"),
        dict(valid, extra="not-allowed"),
    ]

    for malformed in cases:
        assert classify_secret_value(malformed) is SecretValueState.MALFORMED_ENVELOPE
        with pytest.raises(
            (CredentialSecretEnvelopeError, CredentialSecretDecryptionError)
        ) as error:
            codec.decrypt(malformed)
        assert marker not in str(error.value)

    unknown_key = dict(valid, key_id="f" * 24)
    assert classify_secret_value(unknown_key) is SecretValueState.ENCRYPTED
    with pytest.raises(CredentialSecretDecryptionError) as error:
        codec.decrypt(unknown_key)
    assert marker not in str(error.value)


def test_previous_key_configuration_is_bounded_and_rejects_duplicates():
    too_many = ",".join(_encoded_key(start) for start in (0, 32, 64, 96))
    with pytest.raises(CredentialKeyConfigurationError):
        load_credential_keyring(_encoded_key(128), too_many)

    with pytest.raises(CredentialKeyConfigurationError):
        load_credential_keyring(_encoded_key(0), _encoded_key(0))


def test_envelope_serialization_contains_no_plaintext_marker():
    marker = "SYNTHETIC-NO-LEAK-MARKER"
    codec = CredentialSecretCodec(load_credential_keyring(_encoded_key(0), None))

    serialized = json.dumps(codec.encrypt({"client_secret": marker}))

    assert marker not in serialized


def test_keyring_representations_do_not_expose_key_material():
    encoded = _encoded_key(0)
    keyring = load_credential_keyring(encoded, None)

    assert encoded not in repr(keyring)
    assert keyring.current is not None
    assert keyring.current.material.hex() not in repr(keyring.current)
