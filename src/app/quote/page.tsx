'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { Container, Button } from '@/components/ui';

const STEPS = [
  'Category',
  'Product',
  'Dimensions',
  'Material',
  'Quantity',
  'Colors',
  'Finishes',
  'Artwork',
  'Notes',
  'Business Info',
  'Review'
];

export default function QuoteBuilderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    category: '',
    productType: '',
    sizeType: 'standard',
    length: '',
    width: '',
    height: '',
    unit: 'cm',
    material: '',
    quantity: '100',
    colors: '1 color',
    insidePrint: false,
    outsidePrint: true,
    finish: 'Matte',
    designNotes: '',
    artworkFile: null as File | null,
    name: '',
    company: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: '',
    deliveryDate: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFormSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left side Form Steps */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm space-y-6">
              {!formSubmitted ? (
                <>
                  {/* Step HUD indicators */}
                  <div>
                    <span className="text-[10px] font-bold text-kraft uppercase tracking-wider block mb-1">
                      Step {currentStep + 1} of {STEPS.length}
                    </span>
                    <h2 className="text-2xl font-black text-charcoal">{STEPS[currentStep]}</h2>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-soft-gray h-2 rounded-full mt-3 overflow-hidden">
                      <div
                        className="bg-kraft h-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Form step render templates */}
                  <div className="min-h-[250px]">
                    {currentStep === 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {['Boxes', 'Bags', 'Food Packaging', 'Cutlery Sleeves', 'Labels & Stickers'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setFormData({ ...formData, category: cat })}
                            className={`p-6 rounded-2xl border text-left font-bold text-sm transition-all ${
                              formData.category === cat
                                ? 'bg-kraft/10 border-kraft text-kraft'
                                : 'bg-soft-gray border-border-gray text-charcoal hover:border-charcoal'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-text block">
                          Product Option
                        </label>
                        <input
                          type="text"
                          value={formData.productType}
                          onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                          placeholder="e.g. Mailer Box, Carry Bag"
                          className="w-full bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kraft text-charcoal"
                        />
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          {['standard', 'custom'].map((t) => (
                            <button
                              key={t}
                              onClick={() => setFormData({ ...formData, sizeType: t })}
                              className={`flex-1 py-3 rounded-full text-xs font-semibold border transition-all uppercase tracking-wider ${
                                formData.sizeType === t ? 'bg-charcoal text-white border-charcoal' : 'bg-soft-gray text-charcoal border-border-gray'
                              }`}
                            >
                              {t} Size
                            </button>
                          ))}
                        </div>
                        {formData.sizeType === 'custom' && (
                          <div className="grid grid-cols-3 gap-3">
                            <input
                              type="number"
                              placeholder="L"
                              value={formData.length}
                              onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                              className="bg-soft-gray border border-border-gray rounded-full px-4 py-2 text-center text-xs"
                            />
                            <input
                              type="number"
                              placeholder="W"
                              value={formData.width}
                              onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                              className="bg-soft-gray border border-border-gray rounded-full px-4 py-2 text-center text-xs"
                            />
                            <input
                              type="number"
                              placeholder="H"
                              value={formData.height}
                              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                              className="bg-soft-gray border border-border-gray rounded-full px-4 py-2 text-center text-xs"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="grid grid-cols-2 gap-4">
                        {['Kraft Paper', 'White Cardboard', 'Corrugated Board', 'Recycled Paper'].map((mat) => (
                          <button
                            key={mat}
                            onClick={() => setFormData({ ...formData, material: mat })}
                            className={`p-4 rounded-xl border text-center font-bold text-xs transition-all ${
                              formData.material === mat
                                ? 'bg-kraft/10 border-kraft text-kraft'
                                : 'bg-soft-gray border-border-gray text-charcoal hover:border-charcoal'
                            }`}
                          >
                            {mat}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="grid grid-cols-4 gap-3">
                        {['100', '250', '500', '1000', '2500', '5000'].map((qty) => (
                          <button
                            key={qty}
                            onClick={() => setFormData({ ...formData, quantity: qty })}
                            className={`py-3 rounded-full text-xs font-semibold border transition-all ${
                              formData.quantity === qty ? 'bg-charcoal text-white border-charcoal' : 'bg-soft-gray border-border-gray'
                            }`}
                          >
                            {qty} units
                          </button>
                        ))}
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="grid grid-cols-3 gap-3">
                        {['1 color', '2 colors', 'Full Color'].map((col) => (
                          <button
                            key={col}
                            onClick={() => setFormData({ ...formData, colors: col })}
                            className={`py-3 rounded-full text-xs font-semibold border transition-all ${
                              formData.colors === col ? 'bg-charcoal text-white border-charcoal' : 'bg-soft-gray border-border-gray'
                            }`}
                          >
                            {col}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentStep === 6 && (
                      <div className="grid grid-cols-3 gap-3">
                        {['Matte', 'Gloss', 'Soft-touch', 'Spot UV', 'Foil Stamping'].map((fin) => (
                          <button
                            key={fin}
                            onClick={() => setFormData({ ...formData, finish: fin })}
                            className={`py-3 rounded-full text-xs font-semibold border transition-all ${
                              formData.finish === fin ? 'bg-charcoal text-white border-charcoal' : 'bg-soft-gray border-border-gray'
                            }`}
                          >
                            {fin}
                          </button>
                        ))}
                      </div>
                    )}

                    {currentStep === 7 && (
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-text block mb-2">
                          Upload File
                        </label>
                        <input
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setFormData({ ...formData, artworkFile: file });
                          }}
                          className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal w-full"
                        />
                      </div>
                    )}

                    {currentStep === 8 && (
                      <div className="space-y-4">
                        <textarea
                          placeholder="Tell us about packaging guidelines or notes..."
                          value={formData.designNotes}
                          onChange={(e) => setFormData({ ...formData, designNotes: e.target.value })}
                          rows={4}
                          className="w-full bg-soft-gray border border-border-gray rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-kraft text-charcoal"
                        />
                      </div>
                    )}

                    {currentStep === 9 && (
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs w-full text-charcoal"
                        />
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs w-full text-charcoal"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs w-full text-charcoal"
                        />
                        <input
                          type="text"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs w-full text-charcoal"
                        />
                      </div>
                    )}

                    {currentStep === 10 && (
                      <div className="space-y-4 text-sm text-charcoal">
                        <p className="font-bold text-base mb-3 border-b pb-2">Quote Summary Review</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                          <span>Category: <span className="font-semibold">{formData.category || '-'}</span></span>
                          <span>Product Type: <span className="font-semibold">{formData.productType || '-'}</span></span>
                          <span>Material: <span className="font-semibold">{formData.material || '-'}</span></span>
                          <span>Quantity: <span className="font-semibold">{formData.quantity} units</span></span>
                          <span>Finishes: <span className="font-semibold">{formData.finish}</span></span>
                          <span>Contact: <span className="font-semibold">{formData.name} ({formData.company})</span></span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progressive buttons navigation hud */}
                  <div className="flex justify-between items-center border-t border-border-gray pt-6 mt-6">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="px-6 py-2.5 rounded-full border border-border-gray text-xs font-semibold hover:bg-soft-gray disabled:opacity-50 transition-all text-charcoal"
                    >
                      ← Back
                    </button>

                    <button
                      onClick={handleNext}
                      className="px-8 py-2.5 bg-charcoal hover:bg-kraft text-white rounded-full text-xs font-semibold transition-all shadow-sm"
                    >
                      {currentStep === STEPS.length - 1 ? 'Submit Quote' : 'Next Step →'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <span className="text-5xl block mb-4">🎉</span>
                  <h2 className="text-2xl font-black text-charcoal mb-2">Quote Request Submitted</h2>
                  <p className="text-sm text-muted-text max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! Our custom packaging team is reviewing your specifications. We will send detailed pricing to {formData.email} shortly.
                  </p>
                  <Link href="/products" className="inline-block bg-charcoal hover:bg-kraft text-white text-xs font-bold px-6 py-3 rounded-full transition-colors">
                    Back to Catalog
                  </Link>
                </div>
              )}
            </div>

            {/* Right side Sticky HUD Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-border-gray p-6 shadow-sm sticky top-28 space-y-5">
              <h3 className="text-sm font-bold text-charcoal uppercase tracking-wider border-b border-border-gray pb-3">
                Live Quote Summary
              </h3>

              <div className="space-y-3.5 text-xs text-charcoal">
                <div className="flex justify-between">
                  <span className="text-muted-text font-medium">Category:</span>
                  <span className="font-bold">{formData.category || 'Select...'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-text font-medium">Product:</span>
                  <span className="font-bold">{formData.productType || 'Select...'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-text font-medium">Material:</span>
                  <span className="font-bold">{formData.material || 'Select...'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-text font-medium">Quantity:</span>
                  <span className="font-bold">{formData.quantity} units</span>
                </div>
              </div>

              {currentStep >= 3 && (
                <div className="bg-eco-green/10 border border-eco-green/20 rounded-2xl p-4 mt-4 text-center">
                  <span className="text-xs font-semibold text-eco-green block mb-1">
                    Need instant assistance?
                  </span>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-eco-green hover:bg-eco-green/90 text-white font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-full mt-1.5 transition-colors"
                  >
                    💬 WhatsApp Expert
                  </a>
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
