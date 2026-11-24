import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer active:scale-[0.97]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-2 font-mono",
    md: "text-sm px-5 py-2.5 gap-2.5",
    lg: "text-base px-7 py-3.5 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#2563EB] text-white font-bold hover:bg-[#1D4ED8] border border-[#3B82F6]/40 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.55)]",
    secondary:
      "bg-[#0D131F]/90 text-slate-100 hover:text-white hover:bg-[#131B2D] border border-white/15 backdrop-blur-md shadow-lg hover:border-[#2563EB]/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]",
    outline:
      "bg-transparent text-[#3B82F6] border border-[#2563EB]/40 hover:border-[#3B82F6] hover:bg-[#2563EB]/10 shadow-xs",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/10",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
