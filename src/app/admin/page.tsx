'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Container, Button, Badge } from '@/components/ui';

interface QuoteRequest {
  id: string;
  user: string;
  company: string;
  product: string;
  qty: number;
  date: string;
  status: 'pending' | 'quoted' | 'approved' | 'rejected';
  estimatedCost: number;
  material: string;
  size: string;
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'quotes' | 'products' | 'suppliers'>('quotes');
  const [quotes, setQuotes] = useState<QuoteRequest[]>([
    {
      id: 'Q-4982',
      user: 'Amit Sen',
      company: 'Sen Delights Cafe',
      product: 'Mailer Boxes',
      qty: 500,
      date: '2026-07-12',
      status: 'pending',
      estimatedCost: 12500,
      material: 'kraft',
      size: 'Medium Box'
    },
    {
      id: 'Q-4981',
      user: 'Zoya Patel',
      company: 'Zoya Organic Cosmetics',
      product: 'Printed Stickers & Labels',
      qty: 2500,
      date: '2026-07-11',
      status: 'quoted',
      estimatedCost: 5000,
      material: 'glossLaminated',
      size: 'Small Circle'
    },
    {
      id: 'Q-4980',
      user: 'Rohan Roy',
      company: 'Rohan Bistro',
      product: 'Custom Food Boxes',
      qty: 1000,
      date: '2026-07-10',
      status: 'approved',
      estimatedCost: 14000,
      material: 'foodSafe',
      size: 'Medium Meal Box'
    }
  ]);

  const [activeSupplier, setActiveSupplier] = useState<string>('Supplier Alpha');

  const updateQuoteStatus = (id: string, nextStatus: 'quoted' | 'approved' | 'rejected') => {
    setQuotes(prev =>
      prev.map(q => (q.id === id ? { ...q, status: nextStatus } : q))
    );
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-kraft">
                Admin Console
              </span>
              <h1 className="text-3xl font-black text-charcoal mt-1">BrandPack Studio Admin</h1>
            </div>

            {/* Dashboard stats overview grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'New Quote Requests', count: '12 pending', color: 'border-kraft bg-kraft/5' },
                { title: 'Active Production Queue', count: '8 orders', color: 'border-eco-green bg-eco-green/5' },
                { title: 'Monthly Invoice Revenue', count: '₹2,48,500', color: 'border-charcoal bg-soft-gray' }
              ].map((stat, i) => (
                <div key={i} className={`p-6 rounded-3xl border shadow-sm ${stat.color}`}>
                  <h4 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-2">
                    {stat.title}
                  </h4>
                  <span className="text-2xl font-black text-charcoal">{stat.count}</span>
                </div>
              ))}
            </div>

            {/* Module tabs navigator */}
            <div className="flex border-b border-border-gray gap-6">
              {(['quotes', 'products', 'suppliers'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-bold capitalize transition-all relative ${
                    activeTab === tab ? 'text-kraft font-black' : 'text-muted-text hover:text-charcoal'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kraft rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Selected Module layout sheets */}
            <div className="bg-white rounded-3xl border border-border-gray p-6 shadow-sm overflow-hidden">
              {activeTab === 'quotes' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-border-gray text-muted-text font-bold uppercase">
                        <th className="pb-3">ID</th>
                        <th className="pb-3">Company</th>
                        <th className="pb-3">Product</th>
                        <th className="pb-3">Quantity</th>
                        <th className="pb-3">Estimate Cost</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-gray text-charcoal">
                      {quotes.map((q) => (
                        <tr key={q.id} className="hover:bg-soft-gray/30 transition-all">
                          <td className="py-4 font-bold">{q.id}</td>
                          <td className="py-4">
                            <span className="font-semibold block">{q.company}</span>
                            <span className="text-[10px] text-muted-text">{q.user}</span>
                          </td>
                          <td className="py-4">{q.product}</td>
                          <td className="py-4 font-semibold">{q.qty} units</td>
                          <td className="py-4 font-bold">₹{q.estimatedCost.toLocaleString()}</td>
                          <td className="py-4">
                            <Badge
                              variant={
                                q.status === 'approved' ? 'food-safe' :
                                q.status === 'quoted' ? 'eco' : 'info'
                              }
                            >
                              {q.status}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2 justify-center">
                              {q.status === 'pending' && (
                                <button
                                  onClick={() => updateQuoteStatus(q.id, 'quoted')}
                                  className="bg-kraft hover:bg-kraft/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full transition-colors"
                                >
                                  Submit Quote
                                </button>
                              )}
                              {q.status === 'quoted' && (
                                <button
                                  onClick={() => updateQuoteStatus(q.id, 'approved')}
                                  className="bg-eco-green hover:bg-eco-green/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full transition-colors"
                                >
                                  Mark Approved
                                </button>
                              )}
                              {q.status !== 'approved' && q.status !== 'rejected' && (
                                <button
                                  onClick={() => updateQuoteStatus(q.id, 'rejected')}
                                  className="border border-red-200 hover:bg-red-50 text-red-700 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full transition-colors"
                                >
                                  Reject
                                </button>
                              )}
                              {q.status === 'approved' && (
                                <span className="text-[10px] text-muted-text font-bold">
                                  ✅ Handed to Logistics
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'products' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-charcoal border-b pb-2">Active Configurator Products</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'Custom Mailer Boxes', category: 'Boxes', pricingRule: 'Base + volume discount multiplier' },
                      { name: 'Custom Paper Bags', category: 'Bags', pricingRule: 'Stock material index rates' },
                      { name: 'Custom Food Boxes', category: 'Food Packaging', pricingRule: 'Coating barrier multipliers' }
                    ].map((prod, i) => (
                      <div key={i} className="bg-soft-gray border border-border-gray rounded-2xl p-4 flex justify-between items-center text-xs">
                        <div>
                          <h4 className="font-bold text-charcoal">{prod.name}</h4>
                          <span className="text-muted-text block mt-1">Rule: {prod.pricingRule}</span>
                        </div>
                        <Badge variant="info">{prod.category}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'suppliers' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-charcoal border-b pb-2">Verified Manufacturing Partners</h3>
                  <div className="flex gap-3">
                    {['Supplier Alpha', 'Supplier Beta', 'EcoPress India'].map((sup) => (
                      <button
                        key={sup}
                        onClick={() => setActiveSupplier(sup)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                          activeSupplier === sup
                            ? 'bg-charcoal text-white border-charcoal'
                            : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                        }`}
                      >
                        {sup}
                      </button>
                    ))}
                  </div>
                  <div className="bg-soft-gray border border-border-gray rounded-2xl p-4 text-xs text-charcoal space-y-2">
                    <p className="font-bold">{activeSupplier} Profile Details</p>
                    <p className="text-muted-text">Primary specialty: Offset carton boards printing and corrugated assembly boxes.</p>
                    <p className="text-muted-text">Average Lead Time: 5-8 working days after digital proofs signing approvals.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
