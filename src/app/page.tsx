import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// 1. Critical Above-the-Fold Imports (Loaded Immediately)
// These are essential for First Contentful Paint (FCP)
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Container } from '@/components/Container';

const FeaturedArticle = dynamic(() => import('@/components/FeaturedArticle'), { ssr: true });
const Articles = dynamic(() => import('@/components/Articles'), { ssr: true });
const WhatIPublish = dynamic(() => import('@/components/WhatIPublish'), { ssr: true });
const WhoIWriteFor = dynamic(() => import('@/components/WhoIWriteFor'), { ssr: true });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: true });
const Resources = dynamic(() => import('@/components/Resources'), { ssr: true });
const AuthorNote = dynamic(() => import('@/components/AuthorNote'), { ssr: true });

export default function HomePage() {
  return (
    <>
      <Container className="mt-9">
        <Hero />
        <Stats />
        {/* <FeaturedArticle /> */}
        {/* <Articles /> */}
        {/* <WhatIPublish /> */}
        {/* <Resources /> */}
        {/* <WhoIWriteFor /> */}
        {/* <AuthorNote /> */}
      </Container>
    </>
  );
}