import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading } from '@/components/ui';
import { materials } from '@/data/content';

export default function MaterialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <SectionHeading
            tag="Materials Portfolio"
            title="Premium Materials Guide"
            subtitle="Browse and compare the detailed characteristics, premium grades, and coating options of our custom paper stocks."
            align="center"
          />

          {/* Comparison Table */}
          <div className="mt-12 bg-white rounded-3xl border border-border-gray overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-charcoal text-white uppercase tracking-wider font-bold">
                    <th className="p-4">Material</th>
                    <th className="p-4">Best For</th>
                    <th className="p-4 text-center">Food-Safe</th>
                    <th className="p-4 text-center">Eco-Friendly</th>
                    <th className="p-4">Premium Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-gray text-charcoal">
                  {materials.map((mat) => (
                    <tr key={mat.id} className="hover:bg-soft-gray/30 transition-colors">
                      <td className="p-4 font-bold">{mat.name}</td>
                      <td className="p-4 text-muted-text max-w-xs">{mat.bestFor}</td>
                      <td className="p-4 text-center">{mat.foodSafe ? '✅ Yes' : '❌ No'}</td>
                      <td className="p-4 text-center">{mat.ecoFriendly ? '✅ Yes' : '❌ No'}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          mat.premiumLevel === 'Luxury' ? 'bg-charcoal text-white' :
                          mat.premiumLevel === 'Premium' ? 'bg-kraft/10 text-kraft' : 'bg-soft-gray text-muted-text'
                        }`}>
                          {mat.premiumLevel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
