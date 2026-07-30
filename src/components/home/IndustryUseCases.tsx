'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { industries } from '@/data/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function IndustryUseCases() {
  return (
    <section className="py-20 lg:py-28 bg-soft-gray">
      <Container>
        <SectionHeading
          tag="Industry Solutions"
          title="Packaging designed for your industry"
          subtitle="Every business has unique packaging needs. Find solutions tailored to your industry."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link
                href={`/industries/${industry.slug || industry.id}`}
                className="block bg-white rounded-2xl p-6 border border-border-gray h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-charcoal/5 hover:border-kraft/30"
              >
                {/* Icon */}
                <span className="text-3xl mb-4 block">{industry.icon}</span>

                {/* Name */}
                <h3 className="text-base font-bold text-charcoal mb-2">{industry.name}</h3>

                {/* Description */}
                <p className="text-sm text-muted-text leading-relaxed mb-4">{industry.description}</p>

                {/* Product tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {industry.products.slice(0, 4).map((product) => (
                    <span
                      key={product}
                      className="text-[10px] font-medium text-charcoal bg-bg-warm rounded-full px-2.5 py-1"
                    >
                      {product}
                    </span>
                  ))}
                  {industry.products.length > 4 && (
                    <span className="text-[10px] font-medium text-kraft bg-kraft/10 rounded-full px-2.5 py-1">
                      +{industry.products.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-kraft group-hover:gap-3 transition-all duration-300">
                  <span>View Solutions</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
