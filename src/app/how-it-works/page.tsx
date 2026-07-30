import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyStepStack from './StickyStepStack';

export const metadata: Metadata = {
  title: 'How It Works | BrandPack Studio',
  description: 'How BrandPack Studio works — from choosing a template to receiving your branded packaging in 5 simple steps.',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-[100dvh] bg-bg-warm flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-kraft text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block">
              The Process
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-charcoal mb-6">
              From idea to packaging in 5 steps
            </h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              No design experience needed. No minimum frustration.
            </p>
          </div>
        </section>

        {/* Sticky Step Stack */}
        <StickyStepStack />

        {/* Final CTA Section */}
        <section className="py-24 bg-charcoal text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to start?</h2>
            <p className="text-lg text-white/70 mb-10">
              Join 2,000+ brands who design their packaging with BrandPack Studio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/templates" 
                className="bg-kraft text-white font-bold px-8 py-4 rounded-full hover:bg-kraft/90 transition-colors"
              >
                Browse Templates
              </a>
              <a 
                href="/quote" 
                className="border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
