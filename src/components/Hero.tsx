"use client";

export default function Hero() {
  return (
    <section
      style={{
        padding: "72px 24px 64px",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Top banner */}
      <div style={{ marginBottom: "40px" }}>
        <a
          href="/newsletter"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "var(--text-muted)",
            textDecoration: "none",
            padding: "5px 12px 5px 8px",
            borderRadius: "999px",
            border: "1px solid var(--surface-border-light)",
            background: "rgba(255,255,255,0.02)",
            transition: "border-color 0.2s ease",
          }}
        >
          <span
            style={{
              background: "var(--brand-purple)",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 700,
              padding: "1px 6px",
              borderRadius: "4px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            New
          </span>
          <span>This week's deep-dive ships Tuesday at 7 PM IST</span>
          <span style={{ color: "var(--text-accent)" }}>
            Tuesday newsletter →
          </span>
        </a>
      </div>

      {/* Main headline */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.75rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          maxWidth: "820px",
          marginBottom: "24px",
        }}
      >
        I help .NET developers around the globe{" "}
        <span className="gradient-text">ship better software.</span>
      </h1>

      {/* Sub headline */}
      <p
        style={{
          fontSize: "clamp(15px, 2vw, 17px)",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          lineHeight: 1.7,
          marginBottom: "36px",
        }}
      >
        Tutorials, deep-dives, and field notes on .NET, EF Core, Claude Code,
        Docker, Terraform, and the system-design decisions that hold up in
        production. Written when I've shipped something worth sharing.
      </p>

      {/* CTA row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "48px",
        }}
      >
        <a
          href="/newsletter"
          className="btn-subscribe"
          style={{ padding: "10px 20px", fontSize: "14px" }}
        >
          Subscribe to newsletter ↗
        </a>
        <a
          href="/blog"
          className="btn-ghost"
          style={{ padding: "10px 18px", fontSize: "14px" }}
        >
          Read articles →
        </a>
      </div>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {[
          { icon: "📍", text: "Trivandrum, India · 8°N" },
          { icon: "✍️", text: "Writing since 2015" },
          { icon: "🏆", text: "Microsoft MVP · 10M+ devs" },
        ].map((item) => (
          <span
            key={item.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--text-muted)",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span style={{ fontSize: "11px" }}>{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>

      {/* Sponsor line */}
      <div style={{ marginTop: "32px" }}>
        <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          For .NET tool vendors:{" "}
          <a
            href="/sponsor"
            style={{
              color: "var(--text-accent)",
              textDecoration: "none",
              borderBottom: "1px dashed rgba(196, 187, 255, 0.3)",
            }}
          >
            Sponsor a Tuesday issue →
          </a>
        </p>
      </div>
    </section>
  );
}
