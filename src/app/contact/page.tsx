'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading } from '@/components/ui';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Boxes',
    message: ''
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
            {/* Left side info channels */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                tag="Get In Touch"
                title="Connect with our Packaging Experts"
                subtitle="Have specialized technical sizing needs or custom color proofs questions? Ask our specialist team."
                align="left"
              />

              <div className="space-y-4 text-xs text-charcoal">
                <div className="bg-white rounded-2xl border border-border-gray p-4 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h4 className="font-bold">WhatsApp Hotline</h4>
                    <p className="text-muted-text">+91 99999 99999</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-border-gray p-4 flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h4 className="font-bold">Expert Email Channel</h4>
                    <p className="text-muted-text">expert@brandpackstudio.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive message form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-charcoal border-b pb-3 mb-4">
                    Send Inquiry Message
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal w-full"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal w-full"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal w-full"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal w-full"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block mb-1">
                      Product Range Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal w-full focus:outline-none"
                    >
                      <option>Boxes</option>
                      <option>Bags</option>
                      <option>Food Packaging</option>
                      <option>Cutlery Sleeves</option>
                      <option>Labels & Stickers</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      required
                      placeholder="Your Custom Inquiry Specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-soft-gray border border-border-gray rounded-2xl px-5 py-3 text-xs text-charcoal focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal hover:bg-kraft text-white text-xs font-bold py-3.5 rounded-full transition-colors shadow-sm animate-pulse-soft"
                  >
                    Send Inquiry
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <span className="text-4xl block mb-3">✉️</span>
                  <h4 className="text-base font-bold text-charcoal mb-1">Message Received</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Thank you! Your custom packaging inquiry message has been submitted. A specialist packaging expert will reach out to {formData.email} within 24 hours.
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
