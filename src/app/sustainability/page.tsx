'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading } from '@/components/ui';

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <SectionHeading
            tag="Planet Conscious"
            title="Sustainable Packaging Solutions"
            subtitle="Build brand value with 100% recyclable, biodegradable, grease-resistant, and post-consumer recycled paper options."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '♻️', title: 'Post-Consumer Recycled', desc: 'Reduce raw virgin fiber harvest counts with high PCR options.' },
              { icon: '🌿', title: 'Organic Coated Barriers', desc: 'Certified plant-based grease barrier linings that biodegrade naturally.' },
              { icon: '📉', title: 'Aesthetic Kraft Options', desc: 'Natural brown kraft board showcasing eco commitment visually.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-3xl border border-border-gray p-6 shadow-sm">
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h3 className="text-lg font-bold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-text leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
