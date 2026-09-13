---
title: "Telephony provider setup research"
description: "Official-source research notes for the telephony setup experience."
---

# Telephony provider setup research

Research snapshot: 2026-09-04 (America/Chicago). Official provider material only. Prices are indicative and must be confirmed in the provider's live number search for the selected country, number type, capabilities, compliance, taxes, and usage. This note is an implementation source for provider cards and future user-facing guides, not itself a product guide.

Menace Voice credential fields are taken from the generated API model in `ui/src/client/types.gen.ts`; never ask users for credentials not listed there. Keep secrets in the provider console/secret store and paste them only into the matching Menace Voice fields.

## Asterisk ARI

* Official links: [Asterisk documentation](https://docs.asterisk.org/), [ARI getting started](https://docs.asterisk.org/Configuration/Interfaces/Asterisk-REST-Interface-ARI/Getting-Started-with-ARI/), and [ARI security](https://docs.asterisk.org/Configuration/Interfaces/Asterisk-REST-Interface-ARI/ARI-REST-API/).
* What to configure: Asterisk is PBX software, not a number retailer. Obtain a DID/SIP trunk from a carrier separately, register that trunk in Asterisk, and ensure inbound/outbound routing reaches the ARI application. In ARI docs, enable HTTP/ARI, create an ARI user, and use a SIP endpoint registered through `chan_pjsip` or `chan_sip`; do not invent carrier settings.
* Menace fields: `ari_endpoint` (the reachable ARI base URL), `app_name` (ARI username/section), `app_password`, and optional `ws_client_name`. The endpoint must be reachable by Menace Voice and should use HTTPS/TLS where supported.
* Price: unavailable from Asterisk's official project documentation. The carrier's recurring DID/SIP-trunk and usage prices vary; link the chosen carrier's official rate card.

## Cloudonix

* Official links: [Cloudonix API reference](https://docs.cloudonix.com/), [Cloudonix voice application guide](https://docs.cloudonix.com/docs/voice-applications/), and [Cloudonix registration-free dialing reference](https://tickets.cloudonix.io/attachments/download/291/Cloudonix%20Registration-Free%20Dialing.pdf).
* Beginner path: create/sign in to a Cloudonix account, create or select a domain, obtain a Cloudonix API Bearer Token, and connect the SIP carrier or trunk that owns the DID. Create a Voice Application, then use its application name. Do not invent carrier routing or authentication settings; use the values supplied by the selected carrier.
* Menace fields: `bearer_token`, `domain_id` (the Cloudonix domain name), and optional `application_name`. Menace can auto-create an application when omitted, according to the local API contract.
* Price: unavailable/quote-based in public official sources checked 2026-09-04. Show “Price varies; check Cloudonix” rather than a guessed estimate.

## Plivo

* Official links: [Phone numbers overview](https://docs.plivo.com/docs/numbers), [Phone Numbers API](https://www.plivo.com/docs/numbers/api), [Voice API overview](https://www.plivo.com/docs/voice/api/overview), and [phone number pricing](https://www.plivo.com/phone-numbers/pricing/).
* Beginner path: create a Plivo account and add credits; in Console open **Phone Numbers → Buy Numbers**; filter country, number type, and **Voice** capability; complete any country-specific regulatory/compliance application; click **Buy Number**. Create/select a Voice Application and configure its answer URL as directed by the Menace Voice flow. Keep the purchased number in E.164 format.
* Credentials: Plivo's Voice API uses HTTP Basic Auth. Copy **Auth ID** and **Auth Token** from the Plivo Console dashboard. Menace fields are `auth_id`, `auth_token`, and optional `application_id` (Menace may auto-create the application when omitted).
* Price: Plivo states phone numbers are recurring monthly rentals; country/number type determine the rate and some countries add a one-time setup fee. Its US number pricing lists local numbers at **$0.50/month** and toll-free numbers at **$1/month**. Show these only as US starting examples and direct customers to the selected number's live price.

## Telnyx

* Official links: [Search and buy numbers](https://support.telnyx.com/en/articles/4380325-search-and-buy-numbers), [Telnyx numbers pricing](https://telnyx.com/pricing/numbers), [Call Control quickstart](https://developers.telnyx.com/docs/voice/programmable-voice/quickstart), and [API keys/public key](https://support.telnyx.com/en/articles/1130647-api-keys-and-api-v2).
* Beginner path: sign in to Mission Control Portal; search **Numbers → Buy Numbers**, filter for country/type/Voice; add the number to cart and satisfy any order documentation; purchase it. Create or select a Call Control Application, set its webhook URL to the Menace Voice URL supplied by the app, and associate the number/connection. Telnyx's official buying article notes Quickship can provision eligible toll-free voice numbers immediately; otherwise wait for requirements/provisioning.
* Credentials: create/copy a Telnyx API key in **Mission Control Portal → API Keys & Credentials**. Menace fields are `api_key`, optional `connection_id` (Call Control Application ID), and optional `webhook_public_key` from **Keys & Credentials → Public Key** for signature verification.
* Price: official numbers pricing says local and toll-free numbers start at **$1/month**, with $0 platform fee; carrier passthrough and taxes vary, and special 800/short-code prices differ. Treat $1/month as a US/general “from” estimate only, never a guaranteed quote.

## Twilio

* Official links: [Phone Numbers](https://www.twilio.com/docs/phone-numbers), [Console setup](https://www.twilio.com/docs/numbers-and-senders/phone-number-senders), [Programmable Voice quickstart](https://www.twilio.com/docs/voice/quickstart/server), [phone-number pricing explanation](https://help.twilio.com/articles/223182908-How-much-does-a-phone-number-cost), and [pricing](https://www.twilio.com/en-us/phone-numbers).
* Beginner path: create/upgrade a Twilio account; in Console go to **Products & Services → Numbers & Senders → Phone Numbers → Set up a new phone number**; choose country and **Voice**, select a number, review the displayed monthly fee, and purchase. Complete country/address/regulatory requirements. Configure the number's Voice webhook only with the URL shown by the Menace Voice flow.
* Credentials: in Twilio Console **Account Info/API keys & tokens**, copy **Account SID** and **Auth Token**. Menace fields are `account_sid`, `auth_token`, and optional AMD toggle. Never use an API key as the Auth Token unless the Menace integration explicitly supports it.
* Price: Twilio's official phone-number page says US local numbers start at **$1.15/month**; its help page says MRC varies by country, type, capability, and is billed in addition to usage. Display $1.15/month only labeled “US local starting price,” with live Console fee as authority.

## Vobiz

* Official links: [Vobiz number provisioning](https://www.vobiz.ai/products/number-provisioning/), [Vobiz console](https://console.vobiz.ai/), [Vobiz API docs](https://www.docs.vobiz.ai/), [authentication](https://www.docs.vobiz.ai/authentication), and [applications API](https://www.docs.vobiz.ai/applications/list-all-applications).
* Beginner path: create/sign in to the Vobiz Console, complete eKYC, choose local/national/toll-free DID and country/area code, and provision it. Assign the number to a Voice Application; use the application's answer/hangup URLs supplied by Menace Voice. Vobiz's official product page says provisioning is self-serve in 130+ countries and pay-per-minute, but number availability and compliance are country-specific.
* Credentials: Vobiz API docs authenticate with `X-Auth-ID` and `X-Auth-Token`; the Menace fields are `auth_id`, `auth_token`, and optional `application_id`. The Auth ID is an account identifier (examples use `MA_…`), not a phone number.
* Price: Vobiz publicly states pay-per-minute/no monthly minimums, but the official pages checked do not publish a universal monthly DID amount. Show “number price varies by country/type; pay-per-minute usage” and link the live console/product page.

## Vonage

* Official links: [Voice API getting started](https://developer.vonage.com/en/voice/voice-api/getting-started), [Dashboard getting started/API credentials](https://developer.vonage.com/en/dashboard/getting-started), [Buy Numbers](https://developer.vonage.com/en/dashboard/build/phone-numbers/buy-numbers), [voice application setup](https://developer.vonage.com/en/voice/voice-api/guides/advanced-ivr), and [communications pricing](https://www.vonage.com/communications-apis/pricing/).
* Beginner path: create a Vonage API account and add credit; create a Voice Application, click **Generate public and private key**, download/save `private.key`, enable Voice, and set the answer/event URLs from Menace Voice. In Dashboard **Buy Numbers**, choose country, **Voice**, and number type, click **Buy**, then link the number to the Voice Application under its Numbers tab. Some countries require a request and documents.
* Credentials: copy **API Key** and **API Secret** from Dashboard **API Settings**; copy the **Application ID** and private key from the Voice Application. Menace fields are `api_key`, `api_secret`, `application_id`, `private_key`, and optional `signature_secret` for signed webhook verification.
* Price: Vonage's official getting-started example reports one US number at **€0.90/month, €0.00 setup**, but this is an example inventory result, not a universal rate. Numbers are billed monthly and may be request-only by country; always show the live Buy Numbers result and country/type caveat.

## Product UX implications

For each provider card, show an official “Get a number” link and an official “Setup guide” link, alongside a price badge that says “from” plus country/type scope or “varies / quote required.” Link credentials help directly to the provider's console/API-settings page. Do not imply that a provider sells numbers (Asterisk), that a public price exists (Cloudonix), or that a “from” price is the user's final bill.
