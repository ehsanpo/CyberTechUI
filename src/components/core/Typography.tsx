import React from 'react';
import { cn } from '../../lib/utils';

// ============================================
// Typography Component Props
// ============================================

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

// ============================================
// H1 - Largest Heading
// ============================================
export function H1({ children, className, as: Component = 'h1' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-6xl font-semibold font-bai tracking-tight',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// H2 - Second Level Heading
// ============================================
export function H2({ children, className, as: Component = 'h2' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-5xl font-semibold font-bai tracking-tight',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// H3 - Third Level Heading
// ============================================
export function H3({ children, className, as: Component = 'h3' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-4xl font-semibold font-bai tracking-tight',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// H4 - Fourth Level Heading
// ============================================
export function H4({ children, className, as: Component = 'h4' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-3xl font-semibold font-bai tracking-tight',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// H5 - Fifth Level Heading (uses Chakra Petch)
// ============================================
export function H5({ children, className, as: Component = 'h5' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-2xl font-medium font-chakra tracking-tight',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Eyebrow - Small uppercase text above headings
// ============================================
export function Eyebrow({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-xs uppercase tracking-wider font-medium',
        'text-muted-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Body - Regular body text
// ============================================
export function Body({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-base leading-relaxed',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// BodyLarge - Large body text
// ============================================
export function BodyLarge({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-xl leading-relaxed',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// BodySmall - Small body text
// ============================================
export function BodySmall({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-sm leading-relaxed',
        'text-muted-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Label - Bold uppercase labels
// ============================================
export function Label({ children, className, as: Component = 'span' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-xs font-bold uppercase tracking-wider',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Lead - Large introductory text
// ============================================
export function Lead({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-2xl leading-relaxed font-light',
        'text-muted-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Muted - Muted text for less emphasis
// ============================================
export function Muted({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'text-sm',
        'text-muted-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Code - Inline code text
// ============================================
export function Code({ children, className, as: Component = 'code' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem]',
        'font-mono text-sm font-semibold',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Blockquote - Quote styling
// ============================================
export function Blockquote({ children, className, as: Component = 'blockquote' }: TypographyProps) {
  return (
    <Component
      className={cn(
        'mt-6 border-l-4 border-primary pl-6 italic',
        'text-foreground',
        className
      )}
    >
      {children}
    </Component>
  );
}

// ============================================
// Export all as Typography namespace
// ============================================
export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  Eyebrow,
  Body,
  BodyLarge,
  BodySmall,
  Label,
  Lead,
  Muted,
  Code,
  Blockquote,
};
