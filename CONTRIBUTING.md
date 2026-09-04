# Contributing to Menace Voice

Welcome to Menace Voice! ❤️ Thank you for your interest in improving voice AI. ❤️

Menace Voice is a comprehensive voice agent platform that helps developers build, test, and deploy conversational AI systems with minimal setup. This guide will help you understand the project structure, set up your development environment, and start contributing effectively.

## 🏗️ Project Overview

### What is Menace Voice?

Menace Voice is a full-stack platform for building voice agents with a drag-and-drop workflow builder. It combines multiple technologies to provide a seamless experience from development to production deployment.

## 🙌 How You Can Contribute

- 🐛 **Report bugs** with reproduction steps and relevant logs
- 💡 **Suggest features** with a clear use case and expected outcome
- 🔧 **Submit pull requests**
- 📖 **Improve documentation** The documentation is hosted via mintlify and the code is in `docs/` folder

👉 A great place to start is with issues tagged **`good first issue`**.

> And if you like the project, but just don't have time to contribute code, that's fine. There are other easy ways to support the project:
>
> - Share the product with teams that could benefit from it;
> - Describe useful workflows and use cases;
> - Provide clear feedback and implementation details;
> - Mention the project at local meetups and tell your friends/colleagues.

## 🚀 Development Setup

Please refer to our [Development Setup documentation](https://voice.menaceui.com/docs/contribution/setup).

### Getting Help

**Before You Start**

- Check existing project documentation for similar work
- Look for issues tagged `good first issue` for beginner-friendly tasks

**During Development**

- Reference related issues and PRs in your discussions
- Share early drafts for feedback on complex features

## Pull Request Requirements

### Telephony Provider Integration Pull Requests

Telephony changes require thorough review and testing. Every telephony pull request must follow the requirements in this section and include clear documentation and a video demonstrating the complete integration and end-to-end local testing. Maintainers will use these requirements when evaluating whether a pull request is ready for review.

#### Required Evidence

The video must demonstrate all of the following:

- All provider-side setup required before configuring the integration in Menace Voice, including where to find the account credentials and any other required values
- Configuring the provider integration in Menace Voice
- Outbound calls
- Inbound calls
- Number provisioning and any required KYC flow
- Error handling, including an attempt to add a number that the provider account does not own

The pull request must also document the provider setup, configuration, API behavior, number-provisioning flow, and KYC requirements. Where the implementation relies on a specific provider API, add a link to the relevant provider API documentation in a code comment near the applicable logic.

#### Scope of Telephony Integrations

A telephony provider integration pull request must focus on complete, working core calling functionality. Ideally, the integration should support both inbound and outbound calls. If the provider does not support one direction, or it cannot reasonably be included, explain the limitation and its effect on the integration in the pull request.

Additional capabilities, such as call transfer or other provider-specific add-ons, must be submitted in separate pull requests. Keeping these features separate allows maintainers to validate the core integration independently.

Pull requests that omit required documentation, have API mismatches, leave number provisioning or KYC unclear, or do not adequately demonstrate the core calling functionality may be blocked or rejected, depending on the size of the gaps and the pull request's overall compliance with this guide.

### AI Provider Integration Pull Requests

This section applies to new or changed TTS, STT, LLM, realtime, embeddings, and other third-party AI providers.

#### Provider Eligibility

Before maintainers perform detailed code review, the pull request must explain why Menace Voice should support the provider: the user need or maintainer sponsorship, the clear benefit over providers already supported, and links to the provider's public API documentation and pricing. The provider must have a usable public API, self-service account or credential setup, and a credible support or maintenance path.

Providers must be generally available for production use, with a publicly documented and stable API, for at least six months. Alpha, beta, private-preview, or newly launched providers are not accepted by default. A maintainer may approve a documented exception before implementation when there is a compelling user or product need.

#### Required Evidence

Contributors must create or use a real provider account and test the complete integration manually in Menace Voice. Unit, mock, and provider-SDK tests are required where appropriate, but they are not evidence that the Menace Voice integration works.

The pull request must include redacted evidence of all of the following:

- Provider-side account and credential setup (never commit or share secrets)
- Configuring and saving the provider in the Menace Voice UI or API
- Running a real Menace Voice workflow through the same adapter, endpoint, protocol, and authentication scheme that the PR adds
- The resulting provider output and the selected settings
- Redacted provider API request/response logs showing the endpoint, protocol, status, and request fields (never include credentials or user data)
- Invalid-credential and network/error behaviour

For TTS, show real audio produced by Menace Voice and its voice, language, speed, format, sample rate, and duration as applicable. For STT, show a known audio input and transcript. For LLM and realtime providers, show a real Menace Voice turn and any claimed tool or structured-output behaviour.

Include the test date, Menace Voice commit SHA, provider endpoint/API version, and the command, workflow, or recording used to produce the evidence. A direct API request, provider sample SDK, or smoke test using a different protocol does not satisfy this requirement.

Pull requests without a convincing provider-value case or complete live Menace Voice evidence will be rejected without detailed implementation review.

### Bug-Fix Pull Requests

Before submitting a bug fix, check the existing project documentation and report details that help the team reproduce the problem. Include:

- The deployment mode where the bug occurs: the self-hosted or cloud-hosted application
- A clear description of the bug and its impact
- Steps to reproduce the problem
- Expected and actual behavior
- Screenshots, error messages, logs, or other supporting evidence, where applicable
- Environment and version details, along with any other information needed to investigate the issue

Thank you for helping us make voice AI more useful and accessible! 🎉
