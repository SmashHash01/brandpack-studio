'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Container, SectionHeading } from '@/components/ui';
import { categories } from '@/data/content';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function CategoryIcon({ slug }: { slug: string }) {
  if (slug === 'bags') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kraft">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    );
  }
  if (slug === 'food-packaging') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kraft">
        <path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    );
  }
  if (slug === 'labels-stickers') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kraft">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    );
  }
  if (slug === 'cutlery-sleeves') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kraft">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" /><line x1="7" y1="2" x2="7" y2="22" /><path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    );
  }
  if (slug === 'brand-kits') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kraft">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    );
  }
  // Default: boxes
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-kraft">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function CategorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          tag="Product Categories"
          title="Everything your brand needs, in one place"
          subtitle="Browse premium custom packaging across boxes, bags, food packaging, labels, and complete brand kits."
          align="center"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group block p-1.5 rounded-[1.5rem] bg-gradient-to-b from-white to-bg-warm ring-1 ring-black/5 hover:shadow-xl hover:shadow-kraft/8 transition-all duration-300"
            >
              <Link href={`/products/${category.slug}`} className="block h-full">
                <div className="bg-white rounded-[calc(1.5rem-6px)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] p-6 h-full relative break-words max-w-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-bg-warm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CategoryIcon slug={category.slug} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-charcoal mb-2">{category.name}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-text leading-relaxed mb-4 flex-1">{category.description}</p>

                  {/* Material Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-bg-warm text-charcoal text-[11px] font-medium rounded-full px-3 py-1 border border-black/5">
                      {category.materialBadge}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-kraft group-hover:gap-3 transition-all duration-300">
                    <span>Explore {category.name.replace('Custom ', '')}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-kraft rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
