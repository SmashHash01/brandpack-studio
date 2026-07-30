'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';

const ecoFeatures = [
  { icon: '♻️', title: 'Recycled Paper Options', description: 'Post-consumer recycled paper for sustainable packaging.' },
  { icon: '🌾', title: 'Kraft Paper Options', description: 'Natural kraft paper from responsibly sourced materials.' },
  { icon: '🛡️', title: 'Food-Safe Coatings', description: 'Eco-friendly food-safe coatings that are recyclable.' },
  { icon: '🌱', title: 'Biodegradable Alternatives', description: 'Materials that decompose naturally, reducing landfill waste.' },
  { icon: '🚫', title: 'Lower-Plastic Packaging', description: 'Designs that minimize or eliminate plastic components.' },
  { icon: '📱', title: 'QR-Code Education Labels', description: 'Educate customers about recycling with scannable QR codes.' },
];

export function SustainabilitySection() {
  return (
    <section className="relative py-20 lg:py-28 bg-bg-warm overflow-hidden">
      {/* Decorative leaf particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-eco-green/15 text-4xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          >
            🍃
          </motion.span>
        ))}
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-eco-green/10 border border-eco-green/20 rounded-full px-4 py-2 mb-5"
            >
              <span className="w-2 h-2 bg-eco-green rounded-full" />
              <span className="text-sm font-semibold text-eco-green">Sustainability</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-charcoal leading-[1.05] tracking-[-0.02em] mb-4"
            >
              Eco-friendly packaging options{' '}
              <span className="text-eco-green">for modern brands</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-text max-w-2xl mx-auto leading-relaxed"
            >
              Choose recyclable, kraft, recycled, biodegradable, and food-safe materials
              for packaging that supports your brand and customer values.
            </motion.p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecoFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i + 0.3 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-eco-green/10 hover:border-eco-green/30 transition-all duration-300 hover:shadow-md hover:shadow-eco-green/5"
              >
                <span className="text-3xl block mb-3">{feature.icon}</span>
                <h3 className="text-base font-bold text-charcoal mb-1.5">{feature.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/sustainability"
              className="inline-flex items-center gap-2 bg-eco-green text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-lg hover:shadow-eco-green/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Explore Sustainable Packaging
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
