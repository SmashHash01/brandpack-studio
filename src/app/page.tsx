import { Navbar, Footer } from '@/components/layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CategorySection } from '@/components/home/CategorySection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { IndustryUseCases } from '@/components/home/IndustryUseCases';
import { BestSellersSection } from '@/components/home/BestSellersSection';
import { MaterialsSection } from '@/components/home/MaterialsSection';
import { SustainabilitySection } from '@/components/home/SustainabilitySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: 3D Hero */}
        <HeroSection />

        {/* Section 2: Product Categories */}
        <CategorySection />

        {/* Section 3: How It Works */}
        <HowItWorksSection />

        {/* Section 4: Industry Use Cases */}
        <IndustryUseCases />

        {/* Section 5: Best Sellers */}
        <BestSellersSection />

        {/* Section 6: Materials */}
        <MaterialsSection />

        {/* Section 7: Sustainability */}
        <SustainabilitySection />

        {/* Section 8: Testimonials */}
        <TestimonialsSection />

        {/* Section 9: FAQ */}
        <FAQSection />

        {/* Section 10: Final CTA */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
