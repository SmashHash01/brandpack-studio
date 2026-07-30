"use client";

import React from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "eco" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cta-primary text-white shadow-md hover:shadow-xl active:shadow-md",
  secondary:
    "bg-cta-secondary text-white shadow-md hover:shadow-xl active:shadow-md",
  eco: "bg-cta-eco text-white shadow-md hover:shadow-xl active:shadow-md",
  outline:
    "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  text: "text-kraft underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  onClick,
  disabled = false,
  icon,
  loading = false,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const isText = variant === "text";

  const baseClasses = [
    "inline-flex items-center justify-center gap-2",
    "font-semibold",
    "transition-all duration-300 ease-out",
    "cursor-pointer select-none",
    isText ? "" : "rounded-full",
    variantClasses[variant],
    sizeClasses[size],
    disabled || loading
      ? "opacity-50 pointer-events-none cursor-not-allowed"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileHover:
      disabled || loading
        ? {}
        : isText
          ? {}
          : { scale: 1.02, y: -1 },
    whileTap:
      disabled || loading
        ? {}
        : isText
          ? {}
          : { scale: 0.98, y: 0 },
    transition: { type: "spring", stiffness: 400, damping: 25 } as any,
  };

  const content = (
    <>
      {loading && <Spinner />}
      {!loading && icon && (
        <span className="shrink-0 inline-flex">{icon}</span>
      )}
      <span>{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
