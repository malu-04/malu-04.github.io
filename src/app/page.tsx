import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// 1. Critical Above-the-Fold Imports (Loaded Immediately)
// These are essential for First Contentful Paint (FCP)
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 2. Below-the-Fold Imports (Lazy Loaded)
// These split the JS bundle and load asynchronously for better performance
const FeaturedArticle = dynamic(() => import('@/components/FeaturedArticle'), { ssr: true });
const Articles = dynamic(() => import('@/components/Articles'), { ssr: true });
const WhatIPublish = dynamic(() => import('@/components/WhatIPublish'), { ssr: true });
const WhoIWriteFor = dynamic(() => import('@/components/WhoIWriteFor'), { ssr: true });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: true });
const Resources = dynamic(() => import('@/components/Resources'), { ssr: true });
const AuthorNote = dynamic(() => import('@/components/AuthorNote'), { ssr: true });

// 3. Reusable Skeleton Loader for Suspense Boundaries
const SectionSkeleton = () => (
  <div className="w-full h-64 bg-slate-200 dark:bg-slate-800 animate-pulse rounded-xl" aria-hidden="true" />
);

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/*
        Skip to main content link for screen readers (WCAG 2.2 AA compliant).
        Remains visually hidden until focused.
      */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      {/* Main content wrapper with mobile-first padding and responsive max-width */}
      <main
        id="main-content"
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20 md:space-y-32"
      >
        {/* Hero is loaded synchronously for immediate visual impact */}
        <section aria-label="Introduction">
          <Hero />
        </section>

        {/* Dynamic components wrapped in Suspense for graceful loading */}
        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="Featured Content">
            <FeaturedArticle />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="Latest Articles">
            <Articles />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="What I Publish">
            <WhatIPublish />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="Audience">
            <WhoIWriteFor />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="Site Statistics">
            <Stats />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="Developer Resources">
            <Resources />
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section aria-label="About the Author">
            <AuthorNote />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}