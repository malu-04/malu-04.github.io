"use client";

import { mostReadArticles, latestArticles } from '../constants/articles';
import Tag from '../components/ui/Tag';
import { Article } from '../types';

interface ArticleRowProps {
  article: Article;
  index: number;
  showIndex: boolean;
}

function ArticleRow({ article, index, showIndex }: ArticleRowProps) {
  return (
    <a
      href={article.href}
      className="article-row group"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        padding: "18px 0",
        borderBottom: "1px solid var(--surface-border)",
        textDecoration: "none",
      }}
    >
      {showIndex && (
        <span
          style={{
            fontSize: "11px",
            fontFamily: "JetBrains Mono, monospace",
            color: "var(--text-muted)",
            width: "20px",
            flexShrink: 0,
            paddingTop: "3px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "6px",
            flexWrap: "wrap",
          }}
        >
          <Tag variant={article.tag as any}>{article.tagLabel}</Tag>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--text-muted)",
            }}
          >
            {article.date}
          </span>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--text-muted)",
            }}
          >
            · {article.readTime}
          </span>
        </div>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            marginBottom: "5px",
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {article.desc}
        </p>
      </div>
      <span
        className="article-arrow transition-transform group-hover:translate-x-0.5"
        style={{
          fontSize: "14px",
          color: "var(--text-muted)",
          flexShrink: 0,
          paddingTop: "3px",
        }}
      >
        →
      </span>
    </a>
  );
}

export default function Articles() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
      }}
      className="articles-grid"
    >
      {/* Most read */}
      <div>
        <div style={{ marginBottom: "24px" }}>
          <p className="section-eyebrow" style={{ marginBottom: "6px" }}>
            03 · Most read
          </p>
          <h2
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            The deep-dives readers come back to
          </h2>
        </div>
        {mostReadArticles.map((a, i) => (
          <ArticleRow key={i} article={a} index={i} showIndex />
        ))}
      </div>

      {/* Latest */}
      <div>
        <div style={{ marginBottom: "24px" }}>
          <p className="section-eyebrow" style={{ marginBottom: "6px" }}>
            Latest
          </p>
          <h2
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Fresh off the desk
          </h2>
        </div>
        {latestArticles.map((a, i) => (
          <ArticleRow key={i} article={a} index={i} showIndex={false} />
        ))}
        <div style={{ marginTop: "24px" }}>
          <a
            href="/blog"
            className="btn-ghost"
            style={{ fontSize: "13px" }}
          >
            Browse all 150+ articles →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
