"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tag?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  tag,
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isCenter = align === "center";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        ${isCenter ? "text-center mx-auto" : "text-left"}
        ${className}
      `}
    >
      {tag && (
        <span className="block uppercase tracking-wider text-sm font-semibold text-kraft mb-3">
          {tag}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-charcoal leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            text-lg md:text-xl text-muted-text mt-4 leading-relaxed max-w-2xl
            ${isCenter ? "mx-auto" : ""}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
