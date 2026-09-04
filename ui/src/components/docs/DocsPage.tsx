"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Copy,
  Menu,
  Search,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";
import { ARTICLES, type DocArticle, type DocBlock, type DocGroup, type DocsMode,GROUPS } from "@/lib/docs/content";

import { CopyMarkdownButton } from "./CopyMarkdownButton";
import styles from "./docs.module.css";
import { DocsChat } from "./DocsChat";

function getArticle(mode: DocsMode, slug: string) {
  return ARTICLES[mode].find((article) => article.slug === slug) ?? ARTICLES[mode][0];
}

function getFirstSlug(mode: DocsMode) {
  return ARTICLES[mode][0].slug;
}

function getPreviousSlug(mode: DocsMode, slug: string) {
  const currentIndex = ARTICLES[mode].findIndex((article) => article.slug === slug);
  return ARTICLES[mode][currentIndex > 0 ? currentIndex - 1 : ARTICLES[mode].length - 1].slug;
}

function Logo() {
  return <BrandLogo inverse className={styles.logo} />;
}

function CodeBlock({ block }: { block: Extract<DocBlock, { type: "code" }> }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(block.code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = block.code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span>{block.language}</span>
        <button type="button" onClick={() => void copyCode()} aria-label={`Copy ${block.language} example`}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre><code>{block.code}</code></pre>
    </div>
  );
}

function ArticleBody({
  article,
  mode,
  onNavigate,
}: {
  article: DocArticle;
  mode: DocsMode;
  onNavigate: (slug: string, mode: DocsMode) => void;
}) {
  return (
    <div id="article-guidance">
      {article.blocks.map((block, index) => {
        if (block.type === "heading") {
          return <h3 className={styles.sectionHeading} id={block.id} key={`${article.slug}-heading-${block.id}`}>{block.text}</h3>;
        }

        if (block.type === "paragraph") {
          return <p className={styles.bodyCopy} key={`${article.slug}-paragraph-${index}`}>{block.text}</p>;
        }

        if (block.type === "list") {
          return <ul className={styles.checkList} key={`${article.slug}-list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        }

        if (block.type === "code") {
          return <CodeBlock block={block} key={`${article.slug}-code-${index}`} />;
        }

        if (block.type === "callout") {
          return (
          <aside className={styles.callout} key={`${article.slug}-callout-${index}`}>
            <ShieldCheck size={18} aria-hidden="true" />
            <div><strong>{block.title}</strong><p>{block.text}</p></div>
          </aside>
          );
        }

        const targetMode = block.mode ?? mode;
        return (
          <p className={styles.bodyCopy} key={`${article.slug}-link-${index}`}>
            {block.before}
            <a
              className={styles.inlineLink}
              href={`/docs#${block.slug}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(block.slug, targetMode);
              }}
            >
              {block.label}
            </a>
            {block.after}
          </p>
        );
      })}
    </div>
  );
}

function DocsNav({
  groups,
  activeSlug,
  onSelect,
  onClose,
  onOpenChat,
}: {
  groups: DocGroup[];
  activeSlug: string;
  onSelect: (slug: string) => void;
  onClose?: () => void;
  onOpenChat: () => void;
}) {
  return (
    <nav className={styles.sideNav} aria-label="Documentation sections">
      {groups.map((group) => (
        <div className={styles.navGroup} key={group.title}>
          <p className={styles.navGroupTitle}>{group.title}</p>
          {group.items.map((item) => (
            <button className={styles.navItem} data-active={activeSlug === item.slug} key={item.slug} onClick={() => { onSelect(item.slug); onClose?.(); }} type="button">
              <span>{item.title}</span><ChevronRight size={14} aria-hidden="true" />
            </button>
          ))}
        </div>
      ))}
      <div className={styles.helpCard}>
        <CircleHelp size={16} aria-hidden="true" />
        <div>
          <strong>Need a hand?</strong>
          <button type="button" className={styles.helpButton} onClick={onOpenChat}>Talk to our agent <ArrowRight size={13} aria-hidden="true" /></button>
        </div>
      </div>
    </nav>
  );
}

export function DocsPage({
  signInHref = "/auth/login",
  startBuildingHref = "/auth/signup",
}: {
  signInHref?: string;
  startBuildingHref?: string;
}) {
  const [chatOpen, setChatOpen] = useState(false);
  const [mode, setMode] = useState<DocsMode>("builders");
  const [activeSlug, setActiveSlug] = useState("overview");
  const [search, setSearch] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const articles = ARTICLES[mode];
  const groups = GROUPS[mode];
  const article = getArticle(mode, activeSlug);

  const searchResults = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return articles.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(query)).slice(0, 5);
  }, [articles, search]);

  useEffect(() => {
    const syncArticleHash = () => {
    const hashSlug = window.location.hash.replace("#", "");
    const hashMode = (Object.keys(ARTICLES) as DocsMode[]).find((candidateMode) =>
      ARTICLES[candidateMode].some((item) => item.slug === hashSlug),
    );
    if (hashMode) {
      setMode(hashMode);
      setActiveSlug(hashSlug);
    }

    };
    syncArticleHash();
    window.addEventListener("hashchange", syncArticleHash);

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("keydown", onKeyDown); window.removeEventListener("hashchange", syncArticleHash); };
  }, []);

  function selectMode(nextMode: DocsMode) {
    const nextSlug = getFirstSlug(nextMode);
    setMode(nextMode);
    setActiveSlug(nextSlug);
    setSearch("");
    setMobileNavOpen(false);
    window.history.replaceState(null, "", `/docs#${nextSlug}`);
  }

  function selectArticle(slug: string, nextMode: DocsMode = mode) {
    setMode(nextMode);
    setActiveSlug(slug);
    window.history.replaceState(null, "", `/docs#${slug}`);
  }

  return (
    <div className={styles.root}>
      <header className={styles.topBar}>
        <Link href="/" aria-label="Menace Voice home"><Logo /></Link>
        <nav className={styles.productNav} aria-label="Product navigation">
          <Link href="/#platform">Platform</Link><Link href="/#use-cases">Use cases</Link><Link href="/#product-walkthrough">Product</Link><Link href="/#integrations">Integrations</Link><Link className={styles.currentNav} href="/docs" aria-current="page">Docs</Link>
        </nav>
        <div className={styles.topActions}><a href={signInHref}>Sign in</a><a className={styles.startButton} href={startBuildingHref}>Start building</a></div>
        <button className={styles.mobileMenuButton} type="button" aria-label={mobileNavOpen ? "Close docs navigation" : "Open docs navigation"} onClick={() => setMobileNavOpen((open) => !open)}>{mobileNavOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>

      <main>
        <section className={styles.docsHero}>
          <div className={styles.heroTopLine}>
            <div><p className={styles.eyebrow}>DOCUMENTATION / 2026</p><h1>Menace Voice Docs</h1></div>
            <label className={styles.searchBox}><Search size={17} aria-hidden="true" /><input ref={searchRef} value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search docs..." aria-label="Search docs" /><kbd>⌘ K</kbd></label>
          </div>
          {searchResults.length > 0 ? <div className={styles.searchResults} role="listbox" aria-label="Search results">{searchResults.map((result) => <button key={result.slug} type="button" onClick={() => { selectArticle(result.slug); setSearch(""); }}><span>{result.title}</span><ChevronRight size={14} /></button>)}</div> : null}
          <LayoutGroup id="docs-mode">
            <div className={styles.modeTabs} role="tablist" aria-label="Documentation audience">
              <button className={styles.modeTab} data-active={mode === "builders"} id="builders-tab" onClick={() => selectMode("builders")} role="tab" aria-selected={mode === "builders"} type="button"><BookOpen size={15} />Build with Menace{mode === "builders" ? <motion.span className={styles.tabIndicator} layoutId="mode-indicator" /> : null}</button>
              <button className={styles.modeTab} data-active={mode === "agents"} id="agents-tab" onClick={() => selectMode("agents")} role="tab" aria-selected={mode === "agents"} type="button"><Terminal size={15} />Agent docs{mode === "agents" ? <motion.span className={styles.tabIndicator} layoutId="mode-indicator" /> : null}</button>
            </div>
          </LayoutGroup>
        </section>

        <div className={styles.docsLayout}>
          <aside className={styles.desktopSidebar}><DocsNav onOpenChat={() => { setMobileNavOpen(false); setChatOpen(true); }} groups={groups} activeSlug={article.slug} onSelect={selectArticle} /></aside>
          <AnimatePresence>{mobileNavOpen ? <motion.aside className={styles.mobileSidebar} initial={{ x: -24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -24, opacity: 0 }} transition={{ duration: 0.2 }}><DocsNav onOpenChat={() => { setMobileNavOpen(false); setChatOpen(true); }} groups={groups} activeSlug={article.slug} onSelect={selectArticle} onClose={() => setMobileNavOpen(false)} /></motion.aside> : null}</AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.article className={styles.article} id="article-start" key={`${mode}-${article.slug}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22, ease: "easeOut" }}>
              <div className={styles.breadcrumb}><span>{article.section}</span><ChevronRight size={14} /><strong>{article.title}</strong></div>
              <div className={styles.articleHeading}><div><p className={styles.articleLabel}>{mode === "agents" ? "FOR IMPLEMENTATION AGENTS" : "FOR BUILDERS"}</p><h2>{article.title}</h2><p className={styles.articleDescription}>{article.description}</p></div><span className={styles.readTime}>{article.readTime}</span></div>
              <CopyMarkdownButton key={article.slug} article={article} />
              <div className={styles.articleRule} />
              <ArticleBody article={article} mode={mode} onNavigate={selectArticle} />
              <div className={styles.articleFooter} id="article-next"><button type="button" onClick={() => selectArticle(getPreviousSlug(mode, article.slug))}><ArrowLeft size={15} /> Previous</button><button type="button" onClick={() => selectArticle(article.next)}>Next up <ArrowRight size={15} /></button></div>
            </motion.article>
          </AnimatePresence>

          <aside className={styles.rightRail}><div className={styles.railContent}>
            <div className={styles.onPage}><p className={styles.railLabel}>ON THIS PAGE</p><a className={styles.onPageActive} href="#article-start">{article.title}</a><a href="#article-guidance">The practical path</a><a href="#article-next">What&apos;s next</a></div>
            <div className={styles.nextCard}><p className={styles.railLabel}>NEXT STEP</p><strong>{getArticle(mode, article.next).title}</strong><p>{getArticle(mode, article.next).description}</p><button type="button" onClick={() => selectArticle(article.next)}>Continue <ArrowRight size={15} /></button></div>
            <div className={styles.feedbackCard}><p>Was this page useful?</p><div><button type="button" aria-label="Yes, this page was useful"><Check size={14} /></button><button type="button" aria-label="Copy page link"><Clipboard size={14} /></button></div></div>
          </div></aside>
        </div>
      </main>

      <DocsChat currentSlug={article.slug} open={chatOpen} onOpenChange={setChatOpen} signInHref={signInHref} />
      <footer className={styles.footer}><span>© 2026 Menace Voice. Built by Menace.</span><span className={styles.footerLinks}><Link href="/">Back to menacevoice.com <ArrowRight size={12} /></Link></span></footer>
    </div>
  );
}
