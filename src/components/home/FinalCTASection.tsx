'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';

export function FinalCTASection() {
  return (
    <section className="relative py-20 lg:py-28 bg-charcoal overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-kraft/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-eco-green/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-kraft rounded-full animate-pulse-soft" />
            <span className="text-sm font-medium text-white/80">Ready to get started?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-5"
          >
            Ready to build packaging{' '}
            <span className="text-kraft">your customers remember?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Start with a 3D preview, upload your artwork, or request a quote from our packaging team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="/templates" className="bg-white text-charcoal px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Browse Templates
            </a>
            <a href="/contact" className="bg-kraft text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:shadow-kraft/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Talk to Packaging Expert
            </a>
            <a href="/quote" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Request Bulk Quote
            </a>
          </motion.div>

          {/* Bottom trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xs text-white/30 mt-8"
          >
            No commitments · Free design support · Quick quote turnaround
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
