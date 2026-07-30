import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading } from '@/components/ui';

export default function ArtworkGuidelinesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading
              tag="Technical Specs"
              title="Artwork Guidelines & Template Setup"
              subtitle="Ensure your designs render vividly on the physical packaging boards. Check file formats, margins, bleeds, and color spaces."
              align="left"
            />

            <div className="bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm space-y-6 text-charcoal">
              {[
                { title: 'Vector File Standards', desc: 'We recommend submitting vector formats (AI, PDF, SVG, EPS). Avoid placing flat raster images inside files where high-resolution clean text edges are expected.' },
                { title: 'Dieline Alignment and Margin Rules', desc: 'Ensure all key logo elements remain at least 3mm within cut guidelines boundaries. Allow a 3mm outer bleed extension past cut layers.' },
                { title: 'Color Mode Specification', desc: 'Prepare documents utilizing CMYK color coordinates profiles instead of raw digital RGB formats to prevent post-conversion tint offsets.' },
                { title: 'Resolution Minimum limits', desc: 'Ensure pixel-bound raster assets inside vector documents retain a density of at least 300 DPI at full real scale sizes.' }
              ].map((step, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-bold text-base flex gap-2">
                    <span className="text-kraft">{idx + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
