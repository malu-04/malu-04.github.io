import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedArticle from "../components/FeaturedArticle";
import Stats from "../components/Stats";
import WhatIPublish from "../components/WhatIPublish";
import Articles from "../components/Articles";
import Resources from "../components/Resources";
import AuthorNote from "../components/AuthorNote";
import WhoIWriteFor from "../components/WhoIWriteFor";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <FeaturedArticle />
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--surface-border), transparent)",
          maxWidth: "1100px",
          margin: "0 auto 64px",
        }}
      />
      <Stats />
      <WhatIPublish />
      <Articles />
      <Resources />
      <AuthorNote />
      <WhoIWriteFor />
      <Footer />
    </main>
  );
}
