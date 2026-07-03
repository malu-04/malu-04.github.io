"use client";

import { publishCards } from '../constants/publish';
import { PublishCard } from '../types';

export default function WhatIPublish() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      <div style={{ marginBottom: "36px" }}>
        <p className="section-eyebrow" style={{ marginBottom: "6px" }}>
          02 · What I publish
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Free, practical, all on this site
        </h2>
      </div>

            <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {publishCards.map((card: PublishCard, i) => (

              <a
            key={i}
            href={card.href}
            className="card-hover"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "24px",
              borderRadius: "12px",
              border: "1px solid var(--surface-border)",
              background: "var(--surface-card)",
              textDecoration: "none",
              gap: "14px",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(76,51,216,0.12)",
                  border: "1px solid rgba(76,51,216,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "var(--text-accent)",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--text-muted)",
                  letterSpacing: "0.04em",
                  paddingTop: "2px",
                }}
              >
                {card.badge}
              </span>
            </div>

            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {card.desc}
              </p>
            </div>

            {/* Tags */}
            {card.tags.length > 0 && (
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {card.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-accent)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginTop: "auto",
              }}
            >
              {card.cta}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
