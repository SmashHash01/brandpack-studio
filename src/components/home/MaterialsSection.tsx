'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { materials as materialData } from '@/data/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function MaterialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-warm">
      <Container>
        <SectionHeading
          tag="Material Quality"
          title="Premium materials for every packaging need"
          subtitle="Choose from kraft, white cardboard, corrugated, food-grade, recycled, and luxury rigid board."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {materialData.map((material) => (
            <motion.div
              key={material.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-border-gray cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Material texture preview */}
              <div
                className="h-32 relative overflow-hidden"
                style={{ backgroundColor: material.color }}
              >
                {/* Texture pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: material.id === 'corrugated'
                      ? 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)'
                      : material.id === 'recycled'
                      ? 'radial-gradient(circle at 20% 30%, rgba(0,0,0,0.08) 1px, transparent 1px), radial-gradient(circle at 60% 70%, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.05) 1px, transparent 1px)'
                      : material.id === 'kraft'
                      ? 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.03) 8px, rgba(0,0,0,0.03) 9px)'
                      : 'none',
                    backgroundSize: material.id === 'recycled' ? '40px 40px' : 'auto',
                  }}
                />

                {/* Premium level badge */}
                <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  material.premiumLevel === 'Luxury'
                    ? 'bg-charcoal text-white'
                    : material.premiumLevel === 'Premium'
                    ? 'bg-white/90 text-charcoal'
                    : 'bg-white/70 text-muted-text'
                }`}>
                  {material.premiumLevel}
                </span>

                {/* Material name on texture */}
                <span className={`absolute bottom-3 left-4 text-lg font-bold ${
                  material.id === 'luxury-rigid' || material.id === 'corrugated'
                    ? 'text-white/90'
                    : material.id === 'white-cardboard' || material.id === 'food-grade'
                    ? 'text-charcoal/70'
                    : 'text-white/80'
                }`}>
                  {material.name}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-text leading-relaxed mb-4">
                  <span className="font-medium text-charcoal">Best for:</span>{' '}
                  {material.bestFor}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {material.foodSafe && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200 rounded-full px-2.5 py-1">
                      🛡️ Food-Safe
                    </span>
                  )}
                  {material.ecoFriendly && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-eco-green/10 text-eco-green border border-eco-green/20 rounded-full px-2.5 py-1">
                      🌿 Eco-Friendly
                    </span>
                  )}
                </div>

                {/* Finish compatibility */}
                <div>
                  <p className="text-[10px] font-semibold text-muted-text uppercase tracking-wider mb-2">
                    Compatible Finishes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {material.finishCompatibility.map((finish) => (
                      <span
                        key={finish}
                        className="text-[10px] font-medium text-charcoal bg-soft-gray rounded-full px-2 py-0.5"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
