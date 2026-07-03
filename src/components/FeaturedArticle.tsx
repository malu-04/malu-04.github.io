"use client";

export default function FeaturedArticle() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 48px",
      }}
    >
      <a
        href="/blog/working-with-aws-s3"
        style={{
          display: "block",
          textDecoration: "none",
          padding: "20px 24px",
          borderRadius: "12px",
          border: "1px solid var(--surface-border-light)",
          background:
            "linear-gradient(135deg, rgba(76,51,216,0.07) 0%, rgba(13,13,18,0.6) 100%)",
          transition: "border-color 0.2s ease, background 0.2s ease",
          position: "relative",
          overflow: "hidden",
        }}
        className="featured-card"
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(76, 51, 216, 0.08)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "240px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#22c55e",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: "0.05em",
                }}
              >
                <span className="live-dot" />
                JUST SHIPPED
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                16 min read
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                marginBottom: "8px",
              }}
            >
              Working with AWS S3 using ASP.NET Core (.NET 10) — Upload,
              Download &amp; Delete Files
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Upload, download, and delete files in AWS S3 using ASP.NET Core
              and .NET 10 with AWS SDK V4, Minimal APIs, presigned URLs, and IAM
              best practices.
            </p>
          </div>
          <div
            style={{
              alignSelf: "center",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-accent)",
              fontWeight: 500,
            }}
          >
            Read article →
          </div>
        </div>
      </a>

      <style>{`
        .featured-card:hover {
          border-color: rgba(76, 51, 216, 0.5) !important;
          background: linear-gradient(135deg, rgba(76,51,216,0.1) 0%, rgba(13,13,18,0.7) 100%) !important;
        }
      `}</style>
    </section>
  );
}
