"use client";

import { statsData } from '@/constants/stats';
import { Stat } from '@/types';

export default function Stats() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: "36px" }}>
        <p className="section-eyebrow" style={{ marginBottom: "6px" }}>
          01 · By the numbers
        </p>
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          A decade building scalable systems in Africa
        </h2>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1px",
          background: "var(--surface-border)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--surface-border)",
        }}
      >
        {statsData.map((stat: Stat, i) => (
          <div
            key={i}
            style={{
              background: "var(--surface-card)",
              padding: "28px 24px",
              position: "relative",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--text-muted)",
                marginBottom: "4px",
                letterSpacing: "0.04em",
              }}
            >
              {stat.sub}
            </p>
            <div
              className="stat-number"
              style={{
                background:
                  "linear-gradient(135deg, var(--text-primary) 0%, var(--text-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "6px",
              }}
            >
              {stat.value}
            </div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "4px",
              }}
            >
              {stat.label}
            </p>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
              {stat.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}