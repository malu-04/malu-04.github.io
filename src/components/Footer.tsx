"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--surface-border)",
        background: "var(--surface-card)",
        padding: "48px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            marginBottom: "40px",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "6px",
                  background: "var(--brand-purple)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  M
                </span>
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                malu
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Real .NET, real production, every week. Written by Malumbo Mkandawire
              — Solutions Architect and Microsoft MVP based in Tri, India.
            </p>
          </div>

          {/* Nav columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 120px)",
              gap: "32px",
            }}
            className="footer-nav"
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Read
              </p>
              {[
                { label: "Blog", href: "/blog" },
                { label: "Courses", href: "/courses" },
                { label: "Newsletter", href: "/newsletter" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Resources
              </p>
              {[
                { label: "Clean Arch Template", href: "/resources/clean-architecture-template" },
                { label: "Interview Questions", href: "/resources/dotnet-webapi-interview-questions" },
                { label: ".NET Claude Kit", href: "/resources/dotnet-claude-kit" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontFamily: "JetBrains Mono, monospace",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Connect
              </p>
              {[
                { label: "Twitter / X", href: "https://twitter.com/iammukeshm" },
                { label: "GitHub", href: "https://github.com/iammukeshm" },
                { label: "Sponsor", href: "/sponsor" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            height: "1px",
            background: "var(--surface-border)",
            marginBottom: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            © {new Date().getFullYear()} Malumbo Mkandawire · All rights reserved
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "var(--text-muted)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
          keep coding
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .footer-nav { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
