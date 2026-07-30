'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { gsap } from 'gsap';

const NAV_LINKS = [
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'Templates', href: '/templates' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Materials', href: '/materials' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Contact', href: '/contact' },
] as const;

function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 1L16 4.5V13.5L9 17L2 13.5V4.5L9 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 1V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 4.5L9 8.5L16 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const labelRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (labelRef.current) {
      gsap.to(labelRef.current, { y: -2, duration: 0.2, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    if (labelRef.current) {
      gsap.to(labelRef.current, { y: 0, duration: 0.3, ease: 'elastic.out(1, 0.5)' });
    }
  };

  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-muted-text transition-colors hover:text-charcoal group inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={labelRef} className="inline-block relative">
        {label}
      </span>
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-kraft opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-4xl w-[calc(100%-2rem)] mx-auto rounded-full border border-white/40 ${
          isScrolled
            ? 'bg-white/95 shadow-2xl shadow-black/10'
            : 'bg-white/80 backdrop-blur-xl shadow-xl shadow-black/5'
        }`}
      >
        <nav className="px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-kraft text-white transition-transform duration-200 group-hover:scale-105">
                <LogoIcon />
              </div>
              <span className="text-xl font-bold tracking-tight text-charcoal">
                BrandPack
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <Link
                href="/quote"
                className="hidden lg:inline-flex bg-charcoal text-white rounded-full px-5 py-2 text-xs font-bold tracking-wide hover:bg-kraft transition-colors"
              >
                Get Quote
              </Link>

              {/* Mobile Hamburger to X */}
              <button
                type="button"
                className="lg:hidden relative w-10 h-10 flex items-center justify-center text-charcoal hover:bg-black/5 rounded-full transition-colors focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col justify-center items-center gap-[4px] w-5 h-5 relative">
                  <span
                    className={`block w-5 h-[2px] bg-current transform transition-transform duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
                    }`}
                  />
                  <span
                    className={`block w-5 h-[2px] bg-current transform transition-transform duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-6"
          >
            <div className="flex-1 flex flex-col gap-6 mt-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-medium text-charcoal hover:text-kraft transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07 }}
              className="mt-auto"
            >
              <Link
                href="/quote"
                className="flex items-center justify-center w-full bg-charcoal text-white py-4 rounded-full text-lg font-bold tracking-wide transition-all active:scale-[0.98]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
