"use client";

import { audienceData } from '@/constants/audience';
import { Audience } from '@/types';

export default function WhoIWriteFor() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "64px" }} />

      <div style={{ marginBottom: "36px" }}>
        <p className="section-eyebrow" style={{ marginBottom: "6px" }}>
          05 · Who I write for
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Whatever shape your .NET career is in
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1px",
          background: "var(--surface-border)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--surface-border)",
        }}
      >
        {audienceData.map((a: Audience) => (
          <div
            key={a.num}
            style={{
              background: "var(--surface-card)",
              padding: "24px",
              transition: "background 0.2s ease",
            }}
            className="audience-card"
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                color: "var(--brand-purple-light)",
                fontWeight: 600,
                marginBottom: "10px",
                letterSpacing: "0.04em",
              }}
            >
              {a.num}
            </p>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              {a.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}
            >
              {a.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .audience-card:hover {
          background: rgba(76,51,216,0.04) !important;
        }
      `}</style>
    </section>
  );
}
