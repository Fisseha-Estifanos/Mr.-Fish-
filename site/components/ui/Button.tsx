import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

function getStyles(variant: Variant) {
  const base = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  if (variant === "primary") {
    return `${base} text-[#0a0a0f] gradient-accent hover:brightness-110 focus-visible:ring-[#00d4ff]`;
  }
  if (variant === "secondary") {
    return `${base} bg-transparent hover:bg-[rgba(0,212,255,0.08)] focus-visible:ring-[#00d4ff]`;
  }
  // ghost
  return `${base} bg-transparent hover:underline`;
}

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const styles = `${getStyles(variant)} ${sizeStyles[size]} ${className}`;

  const inlineStyle =
    variant === "secondary"
      ? { border: "1px solid var(--color-accent)", color: "var(--color-accent)" }
      : variant === "ghost"
      ? { color: "var(--color-text-secondary)" }
      : {};

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles} style={inlineStyle} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} style={inlineStyle}>
        {children}
      </Link>
    );
  }

  const { ...buttonRest } = props as ButtonAsButton;
  return (
    <button className={styles} style={inlineStyle} {...buttonRest}>
      {children}
    </button>
  );
}
