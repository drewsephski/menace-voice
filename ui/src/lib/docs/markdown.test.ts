import { describe, expect, it } from "vitest";

import { ARTICLES } from "./content";
import { articleToMarkdown } from "./markdown";

describe("article Markdown export", () => {
  it("exports the selected article, code, callouts and absolute documentation links", () => {
    const article = ARTICLES.builders.find((item) => item.slug === "first-agent")!;
    const markdown = articleToMarkdown(article, "http://localhost:3000/");
    expect(markdown).toContain("# Build your first voice agent");
    expect(markdown).toContain("Source: http://localhost:3000/docs#first-agent");
    expect(markdown).toContain("```text\nJob:");
    expect(markdown).toContain("> **What generation gives you**");
    expect(markdown).toContain("[Give your agent tools](http://localhost:3000/docs#tools)");
    expect(markdown).not.toContain("Ask in the forum");
  });
  it("includes all headings and list items from every article", () => {
    for (const article of Object.values(ARTICLES).flat()) {
      const markdown = articleToMarkdown(article, "https://voice.menaceui.com");
      for (const block of article.blocks) {
        if (block.type === "heading") expect(markdown).toContain(`## ${block.text}`);
        if (block.type === "list") for (const item of block.items) expect(markdown).toContain(`- ${item}`);
      }
    }
  });
});
