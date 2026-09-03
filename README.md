# Menace Voice

<p align="center">
  <a href="https://www.producthunt.com/products/dograh">
    <img src="https://img.shields.io/badge/Product%20Hunt-%231%20Product%20of%20the%20Day-DA552F?style=for-the-badge&logo=producthunt&logoColor=white" alt="Menace Voice: #1 Product of the Day on Product Hunt">
  </a>
</p>

**The voice AI platform for building and deploying production agents** — use a visual workflow builder, test agents in minutes, and let AI coding assistants help design and edit them through MCP.

<p align="center">
  <a href="https://app.dograh.com">
    <img src="https://img.shields.io/badge/▶_Try_the_Cloud-app.dograh.com-2563eb?style=for-the-badge" alt="Try the Cloud">
  </a>
  &nbsp;
  <a href="#-get-started">
    <img src="https://img.shields.io/badge/⚡_Self--host_in_60s-One_command-111827?style=for-the-badge" alt="Self-host in 60s">
  </a>
</p>

<p align="center">
  <a href="https://docs.dograh.com">📖 Docs</a> &nbsp;·&nbsp;
  <a href="LICENSE">📜 BSD 2-Clause</a> &nbsp;·&nbsp;
  <a href="README.zh-CN.md">🌐 中文</a> &nbsp;·&nbsp;
  <a href="README.ja-JP.md">🌐 日本語</a>
</p>

<p align="center">
  <img src="docs/images/hero.gif" alt="Menace Voice in action — build a workflow, launch a voice agent, talk to it" width="80%">
</p>

- **Flexible deployment** — run the platform in the environment that fits your team
- **Full control & transparency** — configure the LLM / TTS / STT integrations you need
- **Maintained by YC alumni and exit founders**, committed to making voice AI practical

<p align="center">
  <a href="https://www.producthunt.com/products/dograh?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-dograh-3" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1217382&theme=light&period=daily&t=1786607298379" alt="Menace Voice - #1 Product of the Day | Product Hunt" width="250" height="54"></a>
  &nbsp;
  <a href="https://www.producthunt.com/products/dograh?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-dograh-3" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1217382&theme=light&period=weekly&t=1786966826740" alt="Menace Voice - #1 Product of the Week | Product Hunt" width="250" height="54"></a>
  <br />
  <a href="https://www.producthunt.com/products/dograh?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-dograh-3" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1217382&theme=neutral&period=monthly&t=1788261987782" alt="Menace Voice - #1 Product of the Month | Product Hunt" width="250" height="54"></a>
  &nbsp;
  <a href="https://www.producthunt.com/products/dograh?embed=true&utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_campaign=badge-dograh-3" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=1217382&theme=neutral&period=monthly&topic_id=267&t=1788261987782" alt="Menace Voice - #1 Product of the Month, Developer Tools | Product Hunt" width="250" height="54"></a>
  <br />
  <a href="https://trendshift.io/repositories/31007" target="_blank"><img src="https://trendshift.io/api/badge/repositories/31007" alt="dograh-hq%2Fdograh | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

## 🎥 Featured

<div align="center">
  <a href="https://www.youtube.com/watch?v=xD9JEvfCH9k">
    <img src="https://img.youtube.com/vi/xD9JEvfCH9k/maxresdefault.jpg" alt="Menace Voice featured by Better Stack" width="80%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  </a>
  <br>
  <em>Featured by <strong>Better Stack</strong> — a hands-on look at Menace Voice</em>
</div>

<details>
<summary>📺 Prefer a 2-minute product walkthrough? Click here.</summary>

<div align="center">
  <a href="https://youtu.be/9gPneyf9M9w">
    <img src="docs/images/video_thumbnail_1.png" alt="Watch Menace Voice Demo Video" width="70%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  </a>
</div>

</details>

## ⚖️ Menace Voice vs Vapi vs Retell

An honest comparison on the axes that matter most to teams evaluating voice AI platforms.

|  | **Menace Voice** | **Vapi** | **Retell** |
|---|---|---|---|
| **License** | BSD 2-Clause | Proprietary | Proprietary |
| **Self-hostable** | ✅ Yes — one Docker command | ❌ SaaS only | ❌ SaaS only |
| **Pricing** | Free (self-host) · usage-based (cloud) | Per-minute SaaS | Per-minute SaaS |
| **Bring your own LLM / STT / TTS** | ✅ Any provider, or use Menace Voice's stack | Configurable within their integrations | Configurable within their integrations |
| **Source-level customization** | ✅ Every line is yours to modify | ❌ Closed source | ❌ Closed source |
| **Data residency** | Your infra, your rules | Their cloud | Their cloud |
| **Vendor lock-in** | None | Full | Full |


## 🚀 Get Started

##### Download and setup Menace Voice on your Local Machine

> **Note**
> We collect anonymous usage data to improve the product. You can opt out by setting `ENABLE_TELEMETRY=false` before running the startup script.

> **Note**
> If you wish to run the platform on a remote server instead, checkout our [Documentation](https://docs.dograh.com/deployment/docker#option-2:-remote-server-deployment)

Use the deployment package provided by Menace, then follow the startup instructions in the deployment documentation.

> **Note**
> First startup may take 2-3 minutes to download all images. Once running, open http://localhost:3010 to create your first AI voice assistant!
> For common issues and solutions, see 🔧 **[Troubleshooting](docs/getting-started/troubleshooting.mdx)**.

### 🎙️ Your First Voice Bot

1. Open [http://localhost:3010](http://localhost:3010) in your browser.
2. Pick **Inbound** or **Outbound**, name your bot (e.g. _Lead Qualification_), and describe the use case in 5–10 words (e.g. _Screen insurance form submissions for purchase intent_).
3. Click **Test Agent**.
4. Use **Test Audio** to talk to your agent in the browser, or **Test Chat** to iterate faster in text. In Test Chat, you can edit or replay user turns and Menace Voice will regenerate the agent's replies and node transitions from that point.

> 🔑 **No API keys needed.** Menace Voice ships with auto-generated keys and its own LLM / TTS / STT stack. Connect your own keys for LLM, TTS, STT, or Telephony (e.g. Twilio, Vonage, Telnyx) anytime.

> **Featured On & Community Validation:** Menace Voice was named **[#1 Product of the Day on Product Hunt](https://www.producthunt.com/products/dograh)**.

## Build Agents with MCP

Menace Voice ships with an MCP server, so coding agents can work directly inside your Menace Voice workspace.

Connect Codex, Claude Code, Cursor, or any MCP client to inspect existing agents, search Menace Voice docs, fetch node schemas, create new workflows, and save draft edits from natural language.

When asking your coding agent to build a voice agent, share a short script for
the use case instead of only a one-line prompt. Include the agent persona, call
flow, rules, objection handling, success criteria, and a sample conversation if
you have one.

See the [MCP guide](https://docs.dograh.com/integrations/mcp) to connect your assistant.

## Features

### Voice Agent Builder

- Visual workflow builder with start nodes, agent nodes, global instructions, tools, transitions, and end-call outcomes
- Test Agent panel with **Test Audio** for browser voice testing and **Test Chat** for fast prompt iteration
- QA node, knowledge bases, webhooks, embeds, and tool calling for production workflows

### Voice & Telephony

- Built-in telephony integrations including Twilio, Vonage, Telnyx, Plivo, Vobiz, Cloudonix, and Asterisk ARI
- Human handoff with call transfer on supported telephony providers
- Bring your own LLM, TTS, STT, and telephony providers; store artifacts in bundled MinIO or AWS/S3-compatible storage

### Developer Experience

- One-command Docker setup for self-hosting
- Python backend and modular provider architecture for customization
- Python and Node SDKs for programmatic agent creation and outbound calls

## Deployment Options

### Local Development

Refer [Local Setup](https://docs.dograh.com/contribution/setup)

### Self-Hosted Deployment

For detailed deployment instructions including remote server setup with HTTPS, see our [Docker Deployment Guide](https://docs.dograh.com/deployment/docker#option-2-remote-server-deployment).

### Cloud Version

Visit [https://www.dograh.com](https://www.dograh.com/) for our managed cloud offering.

## 📚Documentation

You can go to [https://docs.dograh.com](https://docs.dograh.com/) for our documentation.

## 📦 SDKs

- **Python SDK** — [pypi.org/project/dograh-sdk](https://pypi.org/project/dograh-sdk/)
- **Node SDK** — [npmjs.com/package/@dograh/sdk](https://www.npmjs.com/package/@dograh/sdk)

## 📄 License

Menace Voice is licensed under the [BSD 2-Clause License](LICENSE).

## 🏢 About

Built with ❤️ by **Menace** (Zansat Technologies Private Limited)
Founded by YC alumni and exit founders committed to making voice AI accessible to everyone.

<br><br><br>

  <p align="center">
    <a href="https://app.dograh.com">☁️ Try Cloud Version</a>
  </p>
