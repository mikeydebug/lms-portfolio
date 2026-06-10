import type { ReactNode } from 'react';

interface ContactButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ContactButton({ children, className = '', onClick }: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-full font-semibold uppercase tracking-widest text-white transition-all
        px-8 py-3 md:px-10 md:py-4 text-sm md:text-base
        hover:scale-105 active:scale-95
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, #1D4ED8 0%, #7C3AED 50%, #DB2777 100%)',
        boxShadow: '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(59,130,246,0.2)',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
