'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: '01',
    title: 'Choose Your Template',
    description: 'Browse 200+ professionally designed packaging structures. Filter by box type, material, and shape. Click any template to preview it in 3D.',
    cta: { label: 'Browse Templates', href: '/templates' },
    color: '#1D1D1F',
    accent: '#B9824B',
  },
  {
    number: '02',
    title: 'Customize Your Design',
    description: 'Upload your logo and artwork. Change colors, materials, and finishes. Preview your branded packaging in real-time 3D from every angle.',
    cta: { label: 'Open Design Studio', href: '/design-studio' },
    color: '#B9824B',
    accent: '#1D1D1F',
  },
  {
    number: '03',
    title: 'Get an Instant Quote',
    description: 'Enter your quantity, size, and finishing options. Get a detailed price breakdown instantly — no waiting, no sales calls required.',
    cta: { label: 'Get Quote Now', href: '/quote' },
    color: '#1F6B4E',
    accent: '#FFFFFF',
  },
  {
    number: '04',
    title: 'Order a Sample Kit',
    description: 'Before committing to bulk, order physical material samples. Feel the paper quality, see the print, approve the finish. Only ₹499.',
    cta: { label: 'Order Samples', href: '/sample-kit' },
    color: '#E8D8C3',
    accent: '#1D1D1F',
  },
  {
    number: '05',
    title: 'Production & Delivery',
    description: 'Once approved, your order enters production. Track it in real-time. Bulk orders delivered in 10-15 business days, anywhere in India.',
    cta: { label: 'Track My Order', href: '/contact' },
    color: '#F8F4EF',
    accent: '#1D1D1F',
  },
];

export default function StickyStepStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.step-card');
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative">
      {STEPS.map((step) => (
        <div
          key={step.number}
          className="step-card min-h-[100dvh] flex items-center justify-center px-4 py-20"
          style={{ backgroundColor: step.color }}
        >
          <div className="max-w-2xl w-full">
            <span className="text-[120px] font-black leading-none opacity-10 block" style={{ color: step.accent }}>
              {step.number}
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 -mt-4" style={{ color: step.accent }}>
              {step.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: step.accent, opacity: 0.75 }}>
              {step.description}
            </p>
            <a
              href={step.cta.href}
              className="inline-flex items-center gap-3 font-bold text-sm px-7 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: step.accent, color: step.color }}
            >
              {step.cta.label}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
