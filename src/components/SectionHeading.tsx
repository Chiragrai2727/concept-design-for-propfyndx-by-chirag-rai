import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`font-semibold text-[#0A2A52] text-center mb-12 leading-tight tracking-[-0.015em] ${className}`}
      style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
    >
      {children}
    </h2>
  );
}
