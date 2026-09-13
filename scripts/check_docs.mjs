import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docs = resolve(root, 'docs');
const config = JSON.parse(readFileSync(resolve(docs, 'docs.json'), 'utf8'));
const spec = JSON.parse(readFileSync(resolve(docs, config.api.openapi), 'utf8'));
const failures = [];
const routes = new Set();
const redirects = new Map((config.redirects ?? []).map(({ source, destination }) => [source, destination]));
const pages = [];
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(resolve(dir, entry.name)) : [resolve(dir, entry.name)]);
}
for (const file of files(docs).filter((file) => file.endsWith('.mdx'))) {
  const route = `/${relative(docs, file).replace(/\.mdx$/, '')}`;
  routes.add(route);
  if (route.endsWith('/index')) routes.add(route.slice(0, -6) || '/');
  pages.push({ file, route, text: readFileSync(file, 'utf8') });
}
function targetExists(target, from = '/') {
  const pathname = decodeURI(target.split(/[?#]/)[0]);
  if (!pathname) return true;
  const route = pathname.startsWith('/') ? pathname : posix.join(posix.dirname(from), pathname);
  const clean = route.replace(/\/$/, '') || '/';
  return routes.has(clean) || redirects.has(clean) || existsSync(resolve(docs, clean.slice(1)));
}
function visit(value) {
  if (typeof value === 'string') {
    if (!targetExists(`/${value}`)) failures.push(`Navigation target missing: ${value}`);
  } else if (Array.isArray(value)) value.forEach(visit);
  else if (value && typeof value === 'object') {
    for (const key of ['tabs', 'groups', 'pages']) if (value[key]) visit(value[key]);
  }
}
visit(config.navigation);
for (const [source, destination] of redirects) {
  if (source === destination || !targetExists(destination)) failures.push(`Invalid redirect: ${source} → ${destination}`);
}
for (const { file, route, text } of pages) {
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter || !/^title: .+/m.test(frontmatter[1]) || !/^description: .+/m.test(frontmatter[1])) failures.push(`${route}: title/description missing`);
  const operation = frontmatter?.[1].match(/^openapi: ["']?(\w+) ([^"'\n]+)["']?$/m);
  if (operation && !spec.paths[operation[2]]?.[operation[1].toLowerCase()]) failures.push(`${route}: unknown OpenAPI operation ${operation[1]} ${operation[2]}`);
  // Exclude examples and generated comments before checking prose links.
  const body = text.replace(/(^`{3,})[^\n]*\n[\s\S]*?\n\1/gm, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  for (const match of body.matchAll(/\]\(([^)\s]+)(?:\s+[^)]*)?\)|(?:href|src)="([^"]+)"/g)) {
    const target = match[1] ?? match[2];
    if (/^(?:https?:|mailto:|data:|#)/.test(target)) continue;
    if (!targetExists(target, route)) failures.push(`${route}: missing link or asset ${target}`);
  }
  if (text.includes('NODE_TLS_REJECT_UNAUTHORIZED=0')) failures.push(`${file}: remove insecure TLS guidance`);
}
for (const script of ['sync_docs_handbook.mjs', 'sync_docs_api.mjs']) {
  const result = spawnSync(process.execPath, [resolve(root, 'scripts', script), '--check'], { stdio: 'inherit' });
  if (result.status !== 0) failures.push(`${script}: generated pages differ from their source`);
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`Documentation checks passed: ${pages.length} pages, ${Object.keys(spec.paths).length} API paths.`);
