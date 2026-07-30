'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

interface EaseReverseButtonProps {
  children: string;
  href?: string;
  onClick?: () => void;
  variant?: 'dark' | 'kraft' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export function EaseReverseButton({
  children,
  href,
  onClick,
  variant = 'dark',
  size = 'md',
  className = '',
  icon,
}: EaseReverseButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | any>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const btn = buttonRef.current as HTMLElement;
    const visibleText = btn.querySelector('.visible-text');
    const cloneText = btn.querySelector('.clone-text');

    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(visibleText, { y: '-100%', duration: 0.4, ease: 'expo.out' }, 0)
      .fromTo(cloneText, { y: '100%' }, { y: '0%', duration: 0.4, ease: 'expo.out' }, 0);

    return () => { tl.current?.kill(); };
  }, []);

  const handleMouseEnter = () => {
    if (tl.current) {
      tl.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (tl.current) {
      tl.current.reverse();
    }
  };

  const variantStyles = {
    dark: 'bg-charcoal text-white hover:shadow-lg hover:shadow-charcoal/20',
    kraft: 'bg-kraft text-white hover:shadow-lg hover:shadow-kraft/25',
    outline: 'border-2 border-charcoal text-charcoal hover:border-kraft hover:text-kraft',
  };

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const baseStyles = `overflow-hidden relative rounded-full font-bold tracking-wide transition-all inline-flex items-center justify-center gap-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const innerContent = (
    <>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative overflow-hidden inline-flex">
        <span className="visible-text block">{children}</span>
        <span className="clone-text absolute left-0 top-0 block">{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={baseStyles}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={baseStyles}
    >
      {innerContent}
    </button>
  );
}

export default EaseReverseButton;
