import type { DocArticle, DocBlock } from "./content";

function blockMarkdown(block: DocBlock, origin: string): string {
  switch (block.type) {
    case "heading": return `## ${block.text}`;
    case "paragraph": return block.text;
    case "list": return block.items.map((item) => `- ${item}`).join("\n");
    case "link": return `${block.before}[${block.label}](${origin}/docs#${block.slug})${block.after || ""}`;
    case "callout": return `> **${block.title}**\n>\n${block.text.split("\n").map((line) => `> ${line}`).join("\n")}`;
    case "code": {
      const longestFence = Math.max(2, ...(block.code.match(/`+/g) || []).map((run) => run.length));
      const fence = "`".repeat(longestFence + 1);
      const language = /^[a-z0-9_-]+$/i.test(block.language) ? block.language.toLowerCase() : "text";
      return `**${block.language}**\n\n${fence}${language}\n${block.code}\n${fence}`;
    }
  }
}

export function articleToMarkdown(article: DocArticle, origin: string): string {
  const base = origin.replace(/\/$/, "");
  return [
    `# ${article.title}`,
    article.description,
    `Source: ${base}/docs#${article.slug}`,
    ...article.blocks.map((block) => blockMarkdown(block, base)),
  ].join("\n\n") + "\n";
}
