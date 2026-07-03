"use client";

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 text-sm px-5 py-2.5";

  const variants = {
    primary: "btn-subscribe bg-brand-purple text-white hover:bg-brand-purple-light active:scale-[0.985]",
    ghost: "btn-ghost border border-surface-border-light text-text-secondary hover:text-text-primary hover:border-purple-400/40 hover:bg-purple-500/5"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}