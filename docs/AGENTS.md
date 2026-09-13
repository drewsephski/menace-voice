# Menace Voice documentation

- Official documentation uses Docs7: MDX with YAML frontmatter and `docs.json` navigation.
- Preserve the custom in-app docs and their UI. Shared `docs/handbook/` pages are generated from `ui/src/lib/docs/articles.json` using `node scripts/sync_docs_handbook.mjs`.
- Inspect current implementation and API schema before documenting behavior. Do not invent endpoints, guarantees, live readiness, prices, or provider configuration.
- Use clear titles, descriptions, stable headings, language-tagged code fences, image alt text, and site-root internal links.
- Keep technical identifiers (such as actual SDK package names and environment variables) intact even when they retain an upstream name.
- Check documentation with `node scripts/check_docs.mjs` and preview with `pnpm dlx @upstash/docs7@0.1.1 dev ./docs`.
- Generated API catalog pages come from `node scripts/sync_docs_api.mjs`; verify every method/path against `api-reference/openapi.json`.
- A local preview is not hosted publication or Context7 indexing. Verify those separately.
- Keep changes reviewable and never skip Git hooks.
