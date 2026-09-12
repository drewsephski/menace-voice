import { redirect } from "next/navigation";

const LEGACY_DOC_HASHES = new Map([
  ["configurations/inference-providers", "model-setup"],
  ["configurations/api-keys", "model-setup"],
  ["getting-started/first-agent", "first-agent"],
  ["getting-started", "overview"],
  ["getting-started/index", "overview"],
]);

export default async function LegacyDocsRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const hash = LEGACY_DOC_HASHES.get(slug.join("/"));
  redirect(hash ? `/docs#${hash}` : "/docs");
}
