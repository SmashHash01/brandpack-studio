'use client';

import { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Container, Button } from '@/components/ui';

type PaymentStep = 'details' | 'processing' | 'success';

export default function CheckoutPage() {
  const [step, setStep] = useState<PaymentStep>('details');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'stripe' | 'bank'>('razorpay');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    gst: '',
    billingAddress: '',
    orderType: 'sample-kit' as 'sample-kit' | 'bulk-deposit',
  });

  const amounts = {
    'sample-kit': { label: 'Sample Kit', amount: 499, currency: '₹' },
    'bulk-deposit': { label: 'Bulk Order Deposit (10%)', amount: 2500, currency: '₹' },
  };

  const current = amounts[formData.orderType];

  const handleProcessPayment = () => {
    setStep('processing');
    // Simulate payment gateway latency
    setTimeout(() => {
      setStep('success');
    }, 2500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <div className="max-w-2xl mx-auto">

            {step === 'details' && (
              <div className="bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-kraft">Secure Checkout</span>
                  <h1 className="text-2xl font-black text-charcoal mt-1">Complete Your Order</h1>
                </div>

                {/* Order type toggle */}
                <div className="flex gap-3">
                  {(['sample-kit', 'bulk-deposit'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, orderType: type })}
                      className={`flex-1 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                        formData.orderType === type
                          ? 'bg-charcoal text-white border-charcoal'
                          : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                      }`}
                    >
                      {amounts[type].label}
                    </button>
                  ))}
                </div>

                {/* Billing details */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                  />
                  <input
                    type="text"
                    placeholder="GST Number (optional)"
                    value={formData.gst}
                    onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
                    className="col-span-2 bg-soft-gray border border-border-gray rounded-full px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                  />
                  <textarea
                    placeholder="Billing Address"
                    value={formData.billingAddress}
                    onChange={(e) => setFormData({ ...formData, billingAddress: e.target.value })}
                    rows={2}
                    className="col-span-2 bg-soft-gray border border-border-gray rounded-2xl px-5 py-3 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft"
                  />
                </div>

                {/* Payment method */}
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase tracking-wider block mb-3">
                    Payment Gateway
                  </label>
                  <div className="flex gap-3">
                    {([
                      { id: 'razorpay' as const, label: 'Razorpay', icon: '🇮🇳' },
                      { id: 'stripe' as const, label: 'Stripe', icon: '💳' },
                      { id: 'bank' as const, label: 'Bank Transfer', icon: '🏦' },
                    ]).map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex-1 p-4 rounded-2xl border text-center transition-all ${
                          paymentMethod === method.id
                            ? 'bg-kraft/10 border-kraft'
                            : 'bg-soft-gray border-border-gray hover:border-charcoal'
                        }`}
                      >
                        <span className="text-xl block mb-1">{method.icon}</span>
                        <span className="text-[10px] font-bold text-charcoal">{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Order summary */}
                <div className="bg-bg-warm rounded-2xl border border-border-gray p-5 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-text">Order Type</span>
                    <span className="font-bold text-charcoal">{current.label}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-text">Payment Method</span>
                    <span className="font-bold text-charcoal capitalize">{paymentMethod}</span>
                  </div>
                  <div className="border-t border-border-gray pt-3 flex justify-between items-center">
                    <span className="text-sm font-bold text-charcoal">Total Amount</span>
                    <span className="text-2xl font-black text-charcoal">
                      {current.currency}{current.amount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleProcessPayment}
                  className="w-full bg-charcoal hover:bg-kraft text-white font-bold text-sm py-4 rounded-full transition-colors shadow-md"
                >
                  Pay {current.currency}{current.amount.toLocaleString()} →
                </button>

                <p className="text-[9px] text-center text-muted-text">
                  🔒 Sandbox mode — no real charges will be made. SSL-secured transaction.
                </p>
              </div>
            )}

            {step === 'processing' && (
              <div className="bg-white rounded-3xl border border-border-gray p-12 shadow-sm text-center">
                <div className="w-14 h-14 border-4 border-kraft/30 border-t-kraft rounded-full animate-spin mx-auto mb-6" />
                <h2 className="text-xl font-black text-charcoal mb-2">Processing Payment</h2>
                <p className="text-sm text-muted-text">
                  Connecting to {paymentMethod === 'razorpay' ? 'Razorpay' : paymentMethod === 'stripe' ? 'Stripe' : 'Bank'} gateway...
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="bg-white rounded-3xl border border-border-gray p-12 shadow-sm text-center">
                <span className="text-6xl block mb-4">✅</span>
                <h2 className="text-2xl font-black text-charcoal mb-2">Payment Successful</h2>
                <p className="text-sm text-muted-text max-w-md mx-auto leading-relaxed mb-2">
                  Your {current.label} order has been confirmed. A receipt has been sent to <strong>{formData.email || 'your email'}</strong>.
                </p>
                <p className="text-xs text-muted-text mb-6">
                  Transaction ID: <span className="font-mono font-bold">TXN-{Date.now().toString(36).toUpperCase()}</span>
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="/products"
                    className="bg-charcoal hover:bg-kraft text-white font-bold text-xs px-6 py-3 rounded-full transition-colors"
                  >
                    Browse Products
                  </a>
                  <a
                    href="/admin"
                    className="border border-border-gray hover:bg-soft-gray text-charcoal font-bold text-xs px-6 py-3 rounded-full transition-colors"
                  >
                    View Orders
                  </a>
                </div>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
