# Menace Voice documentation

The official documentation uses Docs7. The custom Menace docs in `ui/src/components/docs` and `ui/src/lib/docs` remain intact.

From the repository root:

```bash
node scripts/sync_docs_handbook.mjs
node scripts/sync_docs_api.mjs
node scripts/check_docs.mjs
pnpm dlx @upstash/docs7@0.1.1 dev ./docs --port 3333
```

Open http://localhost:3333. Requires Node.js 20.19 or newer and pnpm. The CLI downloads and verifies the official Docs7 renderer into its local cache on first run.

Publishing: select `drewsephski/menace-voice` in Context7 → Docs7, set the reviewed production branch and docs path `docs`, and enable **Add to Context7**. Inspect the hosted build and indexing before calling the release complete. The CLI does not publish.

See [the maintenance guide](contribution/documentation.mdx) for source ownership and checks. `context7.json` at the repository root limits indexing to this documentation tree. Docs7 generates Markdown, discovery, robots, and sitemap endpoints; no hand-maintained duplicate indexes are needed.
