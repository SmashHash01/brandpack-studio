'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { bestSellers } from '@/data/content';

function ProductImage({ category }: { category: string }) {
  // Simple gradient and SVG based on category
  const isBox = category.toLowerCase().includes('box');
  const gradient = isBox
    ? 'from-kraft/20 to-kraft/5'
    : 'from-eco-green/20 to-eco-green/5';

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      {isBox ? (
        <svg className="w-16 h-16 text-kraft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      ) : (
        <svg className="w-16 h-16 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )}
    </div>
  );
}

export function BestSellersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionHeading
              tag="Popular Products"
              title="Best sellers this month"
              subtitle="Our most ordered custom packaging solutions. Order samples or start designing online instantly."
            />
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex border-2 border-charcoal text-charcoal px-6 py-2.5 rounded-full text-sm font-bold hover:bg-charcoal hover:text-white transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex md:grid flex-nowrap md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
        >
          {bestSellers.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="snap-start flex-shrink-0 w-[280px] md:w-auto p-1 rounded-[1.5rem] ring-1 ring-black/5 bg-gradient-to-b from-white to-bg-warm/30 group"
            >
              <div className="bg-white rounded-[calc(1.5rem-4px)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] h-full flex flex-col relative">
                
                {/* Image Area */}
                <div className="relative h-48 w-full bg-bg-warm overflow-hidden">
                  <ProductImage category={product.name} />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isEco && (
                      <span className="bg-white/90 backdrop-blur-sm text-eco-green text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-eco-green"></span>
                        Eco-Friendly
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-kraft text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        Best Seller
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-charcoal mb-1.5">{product.name}</h3>
                  <p className="text-xs text-kraft font-medium mb-2">Best for: {product.bestFor}</p>
                  <p className="text-sm text-muted-text leading-relaxed mb-3 flex-1">{product.description}</p>

                  {/* Material info */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-text mb-4">
                    <svg className="w-3.5 h-3.5 text-kraft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <span>{product.materials}</span>
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] font-medium text-eco-green bg-eco-green/8 border border-eco-green/15 rounded-full px-2 py-0.5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2 mt-auto">
                    <Link
                      href="/quote"
                      className="flex-1 text-center bg-charcoal text-white px-4 py-2.5 rounded-full text-xs font-bold hover:bg-kraft transition-colors duration-200"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="/templates"
                      className="flex-1 text-center border-2 border-charcoal text-charcoal px-4 py-2.5 rounded-full text-xs font-bold hover:bg-charcoal hover:text-white transition-colors duration-200"
                    >
                      Browse Templates
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/products"
            className="w-full text-center border-2 border-charcoal text-charcoal px-6 py-3 rounded-full text-sm font-bold hover:bg-charcoal hover:text-white transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
}
