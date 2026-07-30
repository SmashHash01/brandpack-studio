'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading } from '@/components/ui';

export default function SampleKitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'India',
    businessType: 'Restaurant'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left side details: what's inside */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                tag="Samples Showcase"
                title="Request a BrandPack Studio Sample Kit"
                subtitle="Touch, feel, and inspect our premium print finishes and paper textures before placing a bulk order."
                align="left"
              />

              <div className="bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-charcoal mb-4">What's included in the box:</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Natural Kraft Swatches', desc: 'Touch matte eco-friendly paper fibers.' },
                    { label: 'White Bleached Cardboard', desc: 'Inspect clean premium folding boards.' },
                    { label: 'Sturdy Corrugated Fluting', desc: 'Feel structural mailer box thickness.' },
                    { label: 'Food-Safe Coating Proofs', desc: 'Examine certified food containment layers.' },
                    { label: 'Premium Finishes', desc: 'Examine Matte, High-gloss, Soft-touch, and Foil stamping finishes.' }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <span className="w-6 h-6 bg-kraft/10 border border-kraft text-kraft font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-charcoal text-sm">{item.label}</h4>
                        <p className="text-xs text-muted-text">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal border-b pb-3 mb-4">
                    Shipping Details
                  </h3>

                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                    />
                    <textarea
                      required
                      placeholder="Shipping Address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                      className="w-full bg-soft-gray border border-border-gray rounded-2xl px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                    />
                    <input
                      type="text"
                      required
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal hover:bg-kraft text-white text-xs font-bold py-3.5 rounded-full mt-4 transition-colors shadow-sm"
                  >
                    Request Kit
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <span className="text-4xl block mb-3">📬</span>
                  <h4 className="text-base font-bold text-charcoal mb-1">Kit Request Logged</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    We have logged your sample kit request. A packaging expert will contact {formData.email} to verify the address before shipping.
                  </p>
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
