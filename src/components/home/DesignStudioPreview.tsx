'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading, Button } from '@/components/ui';

const features = [
  { icon: '🎨', label: 'Upload Logo' },
  { icon: '📐', label: 'Choose Material' },
  { icon: '🖨️', label: 'Select Print Side' },
  { icon: '📦', label: 'Pick Quantity' },
];

export function DesignStudioPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          tag="Design Studio"
          title="See your brand on packaging before production"
          subtitle="Upload your logo, choose materials, and preview your packaging in real-time 3D — all from your browser."
          align="center"
        />

        {/* Configurator preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 bg-bg-warm rounded-3xl border border-border-gray overflow-hidden shadow-2xl shadow-charcoal/5"
        >
          <div className="grid lg:grid-cols-[280px_1fr_260px] min-h-[480px]">
            {/* Left panel */}
            <div className="border-r border-border-gray/60 p-6 bg-white/60">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-text mb-5">
                Design Options
              </h4>

              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i + 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-xl mb-2 hover:bg-sand-beige/40 cursor-pointer transition-colors group"
                >
                  <span className="w-10 h-10 bg-bg-warm rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-charcoal">{f.label}</span>
                </motion.div>
              ))}

              {/* Material swatches */}
              <div className="mt-6">
                <p className="text-xs font-semibold text-muted-text mb-3">Material</p>
                <div className="flex gap-2">
                  {[
                    { color: '#B9824B', name: 'Kraft' },
                    { color: '#FAFAFA', name: 'White' },
                    { color: '#111827', name: 'Black' },
                    { color: '#D4C5A9', name: 'Recycled' },
                  ].map((m) => (
                    <button
                      key={m.name}
                      className="w-8 h-8 rounded-full border-2 border-border-gray hover:border-kraft transition-colors relative group"
                      style={{ backgroundColor: m.color }}
                      title={m.name}
                    >
                      {m.name === 'Kraft' && (
                        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-kraft rounded-full border-2 border-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center - 3D preview area */}
            <div className="relative flex items-center justify-center p-8 bg-gradient-to-br from-bg-warm to-sand-beige/30">
              {/* Placeholder 3D preview representation */}
              <div className="relative">
                <motion.div
                  animate={{ rotateY: [0, 5, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-56 h-64 lg:w-72 lg:h-80 bg-kraft/80 rounded-lg shadow-2xl relative"
                  style={{
                    perspective: '800px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Box face with logo area */}
                  <div className="absolute inset-4 border-2 border-dashed border-white/40 rounded-lg flex flex-col items-center justify-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 border-2 border-white/60 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-white/80 text-xs font-medium text-center">Your Logo<br />Here</span>
                    </div>
                    <div className="w-32 h-2 bg-white/30 rounded-full mb-1.5" />
                    <div className="w-20 h-2 bg-white/20 rounded-full" />
                  </div>

                  {/* Edge highlight */}
                  <div className="absolute top-0 right-0 w-4 h-full bg-kraft/60 rounded-r-lg" />
                  <div className="absolute bottom-0 left-0 right-0 h-4 bg-kraft/60 rounded-b-lg" />
                </motion.div>

                {/* Floating controls */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white rounded-full shadow-lg px-3 py-2">
                  {['↻ Rotate', '🔍 Zoom', '📐 Size'].map((ctrl) => (
                    <span key={ctrl} className="text-[10px] font-medium text-muted-text px-2 py-1 rounded-full hover:bg-soft-gray cursor-pointer transition-colors">
                      {ctrl}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="border-l border-border-gray/60 p-6 bg-white/60">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-text mb-5">
                Estimate
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-text">Product</span>
                  <span className="font-medium text-charcoal">Mailer Box</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-text">Material</span>
                  <span className="font-medium text-charcoal">Kraft</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-text">Size</span>
                  <span className="font-medium text-charcoal">30 × 20 × 10 cm</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-text">Quantity</span>
                  <span className="font-medium text-charcoal">500 units</span>
                </div>

                <div className="border-t border-border-gray pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-text">Timeline</span>
                    <span className="font-medium text-eco-green">7-10 days</span>
                  </div>
                </div>

                <div className="border-t border-border-gray pt-4 mt-4">
                  <p className="text-xs text-muted-text mb-1">Estimated Price</p>
                  <p className="text-2xl font-bold text-charcoal">Get Quote</p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <Button variant="primary" size="md" className="w-full">
                  Open Design Studio
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Upload Artwork
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
