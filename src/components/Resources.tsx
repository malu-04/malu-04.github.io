"use client";

import { resourcesData } from '../constants/resources';
import { Resource } from '../types';

export default function Resources() {
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
          04 · Resources I built
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Free · open-source · production-tested
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {resourcesData.map((r: Resource, i) => (
          <a
            key={i}
            href={r.href}
            className="card-hover"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "22px 20px",
              borderRadius: "10px",
              border: "1px solid var(--surface-border)",
              background: "var(--surface-card)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                lineHeight: 1,
              }}
            >
              {r.emoji}
            </div>

            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--brand-purple-light)",
                  letterSpacing: "0.04em",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {r.badge}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.55,
                }}
              >
                {r.title}
              </p>
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "var(--text-accent)",
                fontWeight: 500,
                marginTop: "auto",
              }}
            >
              {r.cta}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
