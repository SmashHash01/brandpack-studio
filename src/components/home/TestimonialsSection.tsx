'use client';

import { motion } from 'motion/react';
import { Container, SectionHeading } from '@/components/ui';
import { testimonials } from '@/data/content';

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          tag="Customer Stories"
          title="Trusted by businesses across industries"
          subtitle="See how brands transformed their packaging and customer experience."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-warm rounded-3xl p-6 lg:p-8 border border-border-gray/50 flex flex-col"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-base lg:text-lg text-charcoal leading-relaxed font-medium mb-6 flex-1 line-clamp-4 hover:line-clamp-none transition-all">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              {/* Result highlight */}
              <div className="inline-flex items-center gap-2 bg-eco-green/10 border border-eco-green/20 rounded-full px-3 py-1.5 mb-6 self-start">
                <svg className="w-3.5 h-3.5 text-eco-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xs font-semibold text-eco-green">
                  {testimonial.result}
                </span>
              </div>

              {/* Customer info */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-kraft/20 flex items-center justify-center text-kraft font-bold text-base shrink-0">
                  {testimonial.customerName.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-charcoal text-sm truncate">{testimonial.customerName}</p>
                  <p className="text-xs text-muted-text truncate">
                    {testimonial.companyName} • {testimonial.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
