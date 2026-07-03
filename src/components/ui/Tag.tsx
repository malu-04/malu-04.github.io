"use client";

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'dotnet' | 'claude' | 'docker' | 'efcore';
  className?: string;
}

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  return (
    <span className={`tag ${variant} ${className}`}>
      {children}
    </span>
  );
}