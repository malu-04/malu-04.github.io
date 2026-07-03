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
      {/* Main headline */}
      <h2 >
        Malumbo Mkandawire
      </h2>

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
    </section>
  );
}
