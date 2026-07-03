"use client";

export default function AuthorNote() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      <div className="section-divider" style={{ marginBottom: "64px" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="author-grid"
      >
        {/* Left: label */}
        <div>
          <p className="section-eyebrow" style={{ marginBottom: "8px" }}>
            A note from the author
          </p>
          <p
            style={{
              fontSize: "11px",
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--text-muted)",
            }}
          >
            Vol. 01 · Since 2015
          </p>

          {/* Est. badge */}
          <div style={{ marginTop: "32px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "999px",
                border: "1px solid var(--surface-border-light)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--brand-purple)",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--text-muted)",
                }}
              >
                Est. 2015
              </span>
            </div>
          </div>

          {/* Author avatar placeholder */}
          <div style={{ marginTop: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--brand-purple) 0%, #8b73f8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
                border: "2px solid rgba(76,51,216,0.3)",
              }}
            >
              MM
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "2px",
                }}
              >
                Mukesh Murugan
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Solutions Architect · Microsoft MVP
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Trivandrum, IN · 8°N
              </p>
            </div>
          </div>
        </div>

        {/* Right: quote + text */}
        <div>
          <blockquote
            style={{
              borderLeft: "2px solid var(--brand-purple)",
              paddingLeft: "20px",
              marginBottom: "20px",
              fontStyle: "italic",
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            I started <em>codewithmukesh</em> because the .NET docs are
            exhaustive, but the hard parts of shipping production software — I
            had to learn the hard way. The system-design decisions. The Docker
            and Terraform plumbing. The trade-offs that aren't in any official
            tutorial.
          </blockquote>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            I write what I wish I'd had when I started. Free. No fluff.
          </p>
          <a
            href="/about"
            className="btn-ghost"
            style={{ fontSize: "13px" }}
          >
            A manifesto · Nº 01
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .author-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
