# Menace Voice prelaunch readiness — September 8, 2026

Status: local product improvements verified; recruitment materials ready. Changes are uncommitted and have not been deployed. After subsequent user authorization, two qualified contacts were messaged. See outreach-log.md for send evidence. No testers have agreed to participate yet.

## Completed

- Corrected English, Chinese, and Japanese READMEs: distinguish bring-your-own provider keys from managed inference when provisioned; explain separate usage costs; correct cloud links.
- Removed inherited Product Hunt awards, ranking badges, and unsupported founder/company claims. Preserved upstream Dograh attribution and labeled its video as an upstream walkthrough.
- Clarified provider and telephony costs in landing-page pricing and FAQs. Added first-test prerequisites and upstream provenance; improved FAQ text readability without replacing artwork.
- Improved quick-agent recovery: missing voice settings link to configuration in a new tab, preserving the brief and call direction in the original tab. Configuration-request failures support retry. Successful creation stays locked during navigation to prevent duplicate agents.
- Clarified browser-first onboarding. Added Models and costs to the actual in-app docs, with links to the first-agent guide. Legacy setup URLs now lead to the relevant article instead of losing their destination.
- Prepared ten public prospect records, invitation drafts, a qualification script, and a first-week recruitment plan. Source freshness, access limitations, and community restrictions are recorded in recruitment.md and prospects.csv.

## Verification performed

| Check | Result |
| --- | --- |
| UI full suite: `pnpm test` | 408 tests passed in 67 files. Includes missing configuration, retry, brief preservation, duplicate-submit protection, and seven legacy-route cases. |
| UI TypeScript: `pnpm exec tsc --noEmit` | Passed. |
| UI lint: `pnpm exec next lint` | Passed with an existing missing `auth` effect dependency warning at `TelephonyConfigWarningsContext.tsx:52`. Existing tool deprecation/workspace-root notices remain. |
| Production Next.js build using an isolated output directory | Passed; 38 pages generated. Build-generated tsconfig changes were restored. |
| Changed MDX files | Basic frontmatter and paired-component checks passed for four pages. Full Mintlify/OpenAPI checks were not run. |
| Live local landing page | Desktop and mobile pricing disclosure and first-test FAQ inspected in a browser. At the mobile viewport, document width equaled available width: 379px, no horizontal overflow. |
| Live local docs routing | Opened `/docs/configurations/inference-providers`; observed redirect to `/docs#model-setup` and the new article. Clicked through to first-agent and back. |
| Quick-agent browser scenarios | Actual components exercised in an isolated harness with simulated auth, SDK responses, and navigation. Observed missing configuration recovery, retained outbound brief, API-error retry, and exactly one successful create request. Successful submission remained disabled. Mobile recovery layout inspected with no horizontal overflow. |
| Diff whitespace | `git diff --check` passed. |

The component harness is not a real backend or voice-call test. The local backend was stopped, so the local app displayed its backend connection banner. Test output also contains a jsdom navigation notice; all tests passed. No real signup, authenticated provider setup, audio, carrier, payment, or webhook transaction was verified in this pass.

## Before a public launch

1. Review and deploy these local changes through the normal release process. Run a fresh-account signup and provider setup against that deployment.
2. Complete a real browser call, including an interruption/correction and unavailable action; verify the saved outcome. If phone calls or voice cloning will be advertised, independently verify those live paths too. Verify the paid-plan path before offering paid pilots.
3. Start with personalized invitations through permitted routes. Aim for five independent observed tests and at least two returning testers or pilot participants. These are proposed readiness criteria, not existing traction or conversion forecasts.
4. Fix blockers learned from those sessions, then prepare the Product Hunt copy, gallery, demo, and date. Confirm submission classification if the relationship to upstream Dograh makes eligibility unclear; removing inherited badges does not establish eligibility.

See [recruitment.md](./recruitment.md) for public sources, drafts, and channel rules, and [prospects.csv](./prospects.csv) for the outreach tracker.
