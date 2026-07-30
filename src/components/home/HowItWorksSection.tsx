'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container, SectionHeading } from '@/components/ui';
import { howItWorksSteps } from '@/data/content';

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-bg-warm">
      <Container>
        <SectionHeading
          tag="Simple Process"
          title="From idea to branded packaging in a few simple steps"
          subtitle="Choose your product, upload your artwork, preview the design, and our packaging team will help you finalize production."
          align="center"
        />

        {/* Steps */}
        <div className="relative mt-16">
          {/* Progress line (desktop) */}
          <div className="hidden lg:block absolute top-[34px] left-[calc(100%/14)] right-[calc(100%/14)] h-[2px] bg-border-gray">
            <motion.div
              className="h-full bg-kraft origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-7 gap-8 sm:gap-6 lg:gap-3 border-l-2 border-kraft/20 pl-6 ml-4 sm:border-l-0 sm:pl-0 sm:ml-0 relative">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center relative"
              >
                {/* Step number circle */}
                <div className="absolute -left-[43px] sm:relative sm:left-0 z-10 w-[32px] h-[32px] sm:w-[68px] sm:h-[68px] bg-white border-2 border-kraft rounded-full flex items-center justify-center mb-0 sm:mb-4 shadow-sm shrink-0 mt-1 sm:mt-0">
                  <span className="hidden sm:inline-block text-2xl">{step.icon}</span>
                  <span className="w-5 h-5 sm:absolute sm:-top-1 sm:-right-1 bg-kraft text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-sm font-bold text-charcoal mb-1.5">{step.title}</h3>

                  {/* Description */}
                  <p className="text-xs text-muted-text leading-relaxed max-w-[160px] sm:mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
