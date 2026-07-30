'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

/* -------------------------------------------------------------------------- */
/*                              Social Icons                                  */
/* -------------------------------------------------------------------------- */

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 7V7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 17V13C11 11.3431 12.3431 10 14 10V10C15.6569 10 17 11.3431 17 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 4L10.5 12.5M20 20L13.5 11.5M10.5 12.5L20 4M10.5 12.5L4 20M13.5 11.5L10.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 2H15C13.3431 2 12 3.34315 12 5V8H9V12H12V22H16V12H19L20 8H16V5C16 4.44772 16.4477 4 17 4H20V2H18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 1L16 4.5V13.5L9 17L2 13.5V4.5L9 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 1V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 4.5L9 8.5L16 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Footer Data                                   */
/* -------------------------------------------------------------------------- */

interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'Products',
    links: [
      { label: 'Custom Boxes', href: '/products/boxes' },
      { label: 'Paper Bags', href: '/products/bags' },
      { label: 'Food Packaging', href: '/products/food-packaging' },
      { label: 'Cutlery Sleeves', href: '/products/cutlery-sleeves' },
      { label: 'Labels & Stickers', href: '/products/labels-stickers' },
      { label: 'Browse Templates', href: '/templates' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Materials Guide', href: '/materials' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Get a Quote', href: '/quote' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Artwork Guidelines', href: '/artwork-guidelines' },
      { label: 'Sample Kit', href: '/sample-kit' },
      { label: 'Get Bulk Quote', href: '/quote' },
      { label: 'Admin', href: '/admin' },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { label: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com' },
  { label: 'X (Twitter)', icon: XIcon, href: 'https://x.com' },
  { label: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
];

const BOTTOM_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

/* -------------------------------------------------------------------------- */
/*                              Footer Component                              */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production, this would call an API
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* ─── Top Section: 4-Column Grid ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-kraft text-white transition-transform duration-200 group-hover:scale-105">
                <LogoIcon />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                BrandPack
                <span className="font-light text-kraft"> Studio</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Premium custom packaging with 3D preview, artwork upload, and
              bulk quote support.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-all hover:border-kraft hover:text-kraft hover:bg-kraft/10"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2–4 — Link Groups */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-light-kraft mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── Middle Section: Newsletter ───────────────────────────── */}
        <div className="mt-14 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-base font-semibold text-white">
                Get packaging tips &amp; exclusive offers
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Join 10,000+ brands receiving our weekly newsletter.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:min-w-[380px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-kraft focus:border-transparent"
              />
              <button
                type="submit"
                className="rounded-full bg-kraft px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-kraft/90 hover:shadow-lg active:scale-[0.98] whitespace-nowrap"
              >
                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* ─── Bottom Section ───────────────────────────────────────── */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} BrandPack Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {BOTTOM_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors hover:text-gray-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
