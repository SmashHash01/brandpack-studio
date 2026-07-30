import React from "react";

type BadgeVariant = "material" | "eco" | "food-safe" | "info";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  material: "bg-sand-beige text-charcoal border border-light-kraft",
  eco: "bg-eco-green/10 text-eco-green border border-eco-green/20",
  "food-safe": "bg-amber-50 text-amber-800 border border-amber-200",
  info: "bg-soft-gray text-muted-text",
};

export default function Badge({
  variant = "info",
  children,
  className = "",
  icon,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full px-3 py-1
        text-xs font-medium
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon && <span className="shrink-0 inline-flex">{icon}</span>}
      {children}
    </span>
  );
}
