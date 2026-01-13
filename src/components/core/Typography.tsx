import React from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function H1({ children, className, as: Component = 'h1' }: TypographyProps) {
  return (
    <Component className={cn('text-6xl font-semibold font-bai tracking-tight text-foreground', className)}>
      {children}
    </Component>
  );
}

export function H2({ children, className, as: Component = 'h2' }: TypographyProps) {
  return (
    <Component className={cn('text-5xl font-semibold font-bai tracking-tight text-foreground', className)}>
      {children}
    </Component>
  );
}

export function H3({ children, className, as: Component = 'h3' }: TypographyProps) {
  return (
    <Component className={cn('text-4xl font-semibold font-bai tracking-tight text-foreground', className)}>
      {children}
    </Component>
  );
}

export function H4({ children, className, as: Component = 'h4' }: TypographyProps) {
  return (
    <Component className={cn('text-3xl font-semibold font-bai tracking-tight text-foreground', className)}>
      {children}
    </Component>
  );
}

export function H5({ children, className, as: Component = 'h5' }: TypographyProps) {
  return (
    <Component className={cn('text-2xl font-medium font-chakra tracking-tight text-foreground', className)}>
      {children}
    </Component>
  );
}

export function Eyebrow({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-xs uppercase tracking-wider font-medium text-muted-foreground', className)}>
      {children}
    </Component>
  );
}

export function Body({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-base leading-relaxed text-foreground', className)}>
      {children}
    </Component>
  );
}

export function BodyLarge({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-xl leading-relaxed text-foreground', className)}>
      {children}
    </Component>
  );
}

export function BodySmall({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-sm leading-relaxed text-muted-foreground', className)}>
      {children}
    </Component>
  );
}

export function Label({ children, className, as: Component = 'span' }: TypographyProps) {
  return (
    <Component className={cn('text-xs font-bold uppercase tracking-wider text-foreground', className)}>
      {children}
    </Component>
  );
}

export function Lead({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-2xl leading-relaxed font-light text-muted-foreground', className)}>
      {children}
    </Component>
  );
}

export function Muted({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </Component>
  );
}

export function Code({ children, className, as: Component = 'code' }: TypographyProps) {
  return (
    <Component className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground', className)}>
      {children}
    </Component>
  );
}

export function Blockquote({ children, className, as: Component = 'blockquote' }: TypographyProps) {
  return (
    <Component className={cn('mt-6 border-l-4 border-primary pl-6 italic text-foreground', className)}>
      {children}
    </Component>
  );
}

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
