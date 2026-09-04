from __future__ import annotations

import base64
import binascii
import hashlib
import json
import os
from collections.abc import Mapping
from dataclasses import dataclass, field
from enum import Enum
from itertools import pairwise
from types import MappingProxyType
from typing import TypeAlias, TypedDict

from nacl import bindings
from nacl.exceptions import CryptoError
from nacl.utils import random as random_bytes

ENVELOPE_VERSION = 1
ALGORITHM = "xchacha20poly1305-ietf"
CREDENTIAL_ENCRYPTION_KEY_ENV = "CREDENTIAL_ENCRYPTION_KEY"
CREDENTIAL_ENCRYPTION_PREVIOUS_KEYS_ENV = "CREDENTIAL_ENCRYPTION_PREVIOUS_KEYS"
MAX_PREVIOUS_KEYS = 3
_KEY_BYTES = bindings.crypto_aead_xchacha20poly1305_ietf_KEYBYTES
_NONCE_BYTES = bindings.crypto_aead_xchacha20poly1305_ietf_NPUBBYTES
_KEY_ID_HEX_LENGTH = 24
_MIN_DISTINCT_KEY_BYTES = 16
_ENVELOPE_FIELDS = frozenset({"version", "algorithm", "key_id", "nonce", "ciphertext"})

JsonValue: TypeAlias = (
    str | int | float | bool | None | list["JsonValue"] | dict[str, "JsonValue"]
)


class CredentialSecretEnvelope(TypedDict):
    version: int
    algorithm: str
    key_id: str
    nonce: str
    ciphertext: str


class CredentialSecretError(Exception):
    pass


class CredentialKeyConfigurationError(CredentialSecretError):
    pass


class CredentialSecretKeyUnavailableError(CredentialSecretError):
    pass


class CredentialSecretEnvelopeError(CredentialSecretError):
    pass


class CredentialSecretDecryptionError(CredentialSecretError):
    pass


class SecretValueState(str, Enum):
    ENCRYPTED = "encrypted"
    LEGACY_PLAINTEXT = "legacy_plaintext"
    MALFORMED_ENVELOPE = "malformed_envelope"


@dataclass(frozen=True)
class CredentialEncryptionKey:
    key_id: str
    material: bytes = field(repr=False)


@dataclass(frozen=True)
class CredentialEncryptionKeyring:
    current: CredentialEncryptionKey | None
    previous: Mapping[str, CredentialEncryptionKey]

    def __repr__(self) -> str:
        current_id = self.current.key_id if self.current else None
        return (
            "CredentialEncryptionKeyring("
            f"current_key_id={current_id!r}, previous_key_count={len(self.previous)})"
        )


def _safe_b64encode(value: bytes) -> str:
    return base64.urlsafe_b64encode(value).decode("ascii").rstrip("=")


def _safe_b64decode(value: str) -> bytes:
    if not value or value != value.strip():
        raise ValueError("invalid base64url value")
    unpadded = value.rstrip("=")
    provided_padding = len(value) - len(unpadded)
    required_padding = -len(unpadded) % 4
    if provided_padding not in (0, required_padding):
        raise ValueError("invalid base64url padding")
    padded = unpadded + "=" * required_padding
    try:
        decoded = base64.b64decode(padded, altchars=b"-_", validate=True)
    except (binascii.Error, ValueError) as exc:
        raise ValueError("invalid base64url value") from exc
    if _safe_b64encode(decoded) != unpadded:
        raise ValueError("non-canonical base64url value")
    return decoded


def _has_predictable_key_structure(value: bytes) -> bool:
    if len(set(value)) < _MIN_DISTINCT_KEY_BYTES:
        return True
    if all(0x20 <= byte <= 0x7E for byte in value):
        return True
    deltas = {(right - left) % 256 for left, right in pairwise(value)}
    if len(deltas) == 1:
        return True
    for period in range(1, len(value) // 2 + 1):
        if len(value) % period == 0 and value == value[:period] * (
            len(value) // period
        ):
            return True
    return False


def _parse_key(value: str | None) -> CredentialEncryptionKey | None:
    if value is None or not value.strip():
        return None
    try:
        material = _safe_b64decode(value)
    except ValueError:
        raise CredentialKeyConfigurationError(
            "Credential encryption keys must be canonical base64url values"
        ) from None
    if len(material) != _KEY_BYTES:
        raise CredentialKeyConfigurationError(
            f"Credential encryption keys must decode to exactly {_KEY_BYTES} bytes"
        )
    if _has_predictable_key_structure(material):
        raise CredentialKeyConfigurationError(
            "Credential encryption key material has a predictable structure"
        )
    key_id = hashlib.sha256(material).hexdigest()[:_KEY_ID_HEX_LENGTH]
    return CredentialEncryptionKey(key_id=key_id, material=material)


def load_credential_keyring(
    current_value: str | None,
    previous_values: str | None,
    *,
    require_current: bool = False,
) -> CredentialEncryptionKeyring:
    current = _parse_key(current_value)
    if require_current and current is None:
        raise CredentialKeyConfigurationError(
            "A current credential encryption key is required"
        )

    previous_parts: list[str] = []
    if previous_values is not None and previous_values.strip():
        previous_parts = previous_values.split(",")
        if any(not part.strip() for part in previous_parts):
            raise CredentialKeyConfigurationError(
                "Previous credential encryption keys contain an empty entry"
            )
        if len(previous_parts) > MAX_PREVIOUS_KEYS:
            raise CredentialKeyConfigurationError(
                f"At most {MAX_PREVIOUS_KEYS} previous credential encryption keys are allowed"
            )

    previous: dict[str, CredentialEncryptionKey] = {}
    configured_ids = {current.key_id} if current else set()
    for part in previous_parts:
        parsed = _parse_key(part.strip())
        if parsed is None:
            raise CredentialKeyConfigurationError(
                "Previous credential encryption keys contain an empty entry"
            )
        if parsed.key_id in configured_ids:
            raise CredentialKeyConfigurationError(
                "Credential encryption key configuration contains a duplicate key"
            )
        configured_ids.add(parsed.key_id)
        previous[parsed.key_id] = parsed

    return CredentialEncryptionKeyring(
        current=current,
        previous=MappingProxyType(previous),
    )


def load_credential_keyring_from_environment(
    environ: Mapping[str, str] | None = None,
    *,
    require_current: bool | None = None,
) -> CredentialEncryptionKeyring:
    source = os.environ if environ is None else environ
    if require_current is None:
        require_current = source.get("ENVIRONMENT", "local").lower() == "production"
    return load_credential_keyring(
        source.get(CREDENTIAL_ENCRYPTION_KEY_ENV),
        source.get(CREDENTIAL_ENCRYPTION_PREVIOUS_KEYS_ENV),
        require_current=require_current,
    )


def _is_envelope_candidate(value: object) -> bool:
    if not isinstance(value, dict):
        return False
    keys = set(value)
    matching_field_count = len(keys & _ENVELOPE_FIELDS)
    return value.get("algorithm") == ALGORITHM or matching_field_count >= 3


def _has_valid_envelope_shape(value: object) -> bool:
    if not isinstance(value, dict) or set(value) != _ENVELOPE_FIELDS:
        return False
    metadata_is_valid = (
        type(value["version"]) is int
        and value["version"] == ENVELOPE_VERSION
        and value["algorithm"] == ALGORITHM
        and isinstance(value["key_id"], str)
        and len(value["key_id"]) == _KEY_ID_HEX_LENGTH
        and all(character in "0123456789abcdef" for character in value["key_id"])
        and isinstance(value["nonce"], str)
        and isinstance(value["ciphertext"], str)
    )
    if not metadata_is_valid:
        return False
    try:
        nonce = _safe_b64decode(value["nonce"])
        ciphertext = _safe_b64decode(value["ciphertext"])
    except ValueError:
        return False
    return (
        len(nonce) == _NONCE_BYTES
        and len(ciphertext) >= bindings.crypto_aead_xchacha20poly1305_ietf_ABYTES
    )


def classify_secret_value(value: object) -> SecretValueState:
    if _has_valid_envelope_shape(value):
        return SecretValueState.ENCRYPTED
    if _is_envelope_candidate(value):
        return SecretValueState.MALFORMED_ENVELOPE
    return SecretValueState.LEGACY_PLAINTEXT


def _associated_data(version: int, algorithm: str, key_id: str) -> bytes:
    return json.dumps(
        {"algorithm": algorithm, "key_id": key_id, "version": version},
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")


class CredentialSecretCodec:
    def __init__(self, keyring: CredentialEncryptionKeyring):
        self._keyring = keyring

    @property
    def current_key_id(self) -> str | None:
        return self._keyring.current.key_id if self._keyring.current else None

    def encrypt(self, value: JsonValue) -> CredentialSecretEnvelope:
        current = self._keyring.current
        if current is None:
            raise CredentialSecretKeyUnavailableError(
                "Credential encryption requires an explicitly configured current key"
            )
        try:
            plaintext = json.dumps(
                value,
                ensure_ascii=False,
                allow_nan=False,
                separators=(",", ":"),
            ).encode("utf-8")
        except (TypeError, ValueError):
            raise CredentialSecretEnvelopeError(
                "Credential secret value is not valid JSON"
            ) from None

        nonce = random_bytes(_NONCE_BYTES)
        aad = _associated_data(ENVELOPE_VERSION, ALGORITHM, current.key_id)
        ciphertext = bindings.crypto_aead_xchacha20poly1305_ietf_encrypt(
            plaintext,
            aad,
            nonce,
            current.material,
        )
        return {
            "version": ENVELOPE_VERSION,
            "algorithm": ALGORITHM,
            "key_id": current.key_id,
            "nonce": _safe_b64encode(nonce),
            "ciphertext": _safe_b64encode(ciphertext),
        }

    def decrypt(self, value: object) -> JsonValue:
        if classify_secret_value(value) is not SecretValueState.ENCRYPTED:
            raise CredentialSecretEnvelopeError(
                "Credential secret value is not a supported encrypted envelope"
            )
        envelope = value
        if not isinstance(envelope, dict):
            raise CredentialSecretEnvelopeError(
                "Credential secret value is not a supported encrypted envelope"
            )

        key_id = envelope["key_id"]
        key = None
        if self._keyring.current and self._keyring.current.key_id == key_id:
            key = self._keyring.current
        elif isinstance(key_id, str):
            key = self._keyring.previous.get(key_id)
        if key is None:
            raise CredentialSecretDecryptionError(
                "Credential secret cannot be authenticated with the configured keyring"
            )

        try:
            nonce = _safe_b64decode(envelope["nonce"])
            ciphertext = _safe_b64decode(envelope["ciphertext"])
            if len(nonce) != _NONCE_BYTES:
                raise ValueError("invalid nonce length")
            aad = _associated_data(envelope["version"], envelope["algorithm"], key_id)
            plaintext = bindings.crypto_aead_xchacha20poly1305_ietf_decrypt(
                ciphertext,
                aad,
                nonce,
                key.material,
            )
            decoded = json.loads(plaintext)
        except (
            CryptoError,
            UnicodeDecodeError,
            ValueError,
            TypeError,
            KeyError,
        ):
            raise CredentialSecretDecryptionError(
                "Credential secret authentication failed"
            ) from None
        return decoded
