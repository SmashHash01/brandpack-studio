'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui';
import { trustBadges } from '@/data/content';

const HeroScene = dynamic(
  () => import('@/components/3d/HeroScene').then((mod) => ({ default: mod.HeroScene })),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full h-full min-h-[320px] lg:min-h-[600px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-kraft/30 border-t-kraft rounded-full animate-spin" />
          <p className="text-sm text-muted-text">Loading 3D preview...</p>
        </div>
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] bg-bg-warm overflow-hidden">
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[100dvh] pt-24 pb-12 lg:py-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="z-10 w-full"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-border-gray rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-eco-green rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-charcoal">
                Premium Custom Packaging Studio
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[76px] font-extrabold text-charcoal leading-[0.95] tracking-[-0.03em] mb-6">
              Custom Packaging{' '}
              <span className="text-kraft">That Makes</span>{' '}
              Your Brand{' '}
              <span className="relative inline-block">
                Look Premium
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 3 100 2 150 5C200 8 250 4 298 7" stroke="#B9824B" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-text leading-relaxed max-w-xl mb-8">
              Design and order custom boxes, paper bags, cutlery sleeves, food packaging,
              stickers, and brand packaging online — with 3D preview, artwork upload,
              and bulk quote support.
            </p>

            {/* CTAs — all linked */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 bg-charcoal text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-kraft hover:shadow-lg hover:shadow-charcoal/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Browse Templates
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-kraft text-white px-7 py-4 rounded-full font-semibold text-base hover:shadow-lg hover:shadow-kraft/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get Bulk Quote
              </Link>
            </div>

            <Link
              href="/sample-kit"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-kraft hover:gap-3 transition-all duration-300"
            >
              <span>Order Sample Kit</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex lg:flex-wrap gap-3 mt-8 overflow-x-auto pb-2 snap-x snap-mandatory lg:overflow-visible lg:pb-0"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="snap-start flex-shrink-0 flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-border-gray/50 rounded-full px-3.5 py-2 text-xs font-medium text-charcoal"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[320px] lg:h-[500px] xl:h-[600px] lg:absolute lg:right-0 lg:top-0 lg:w-[55%] lg:h-full"
          >
            <HeroScene />
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
