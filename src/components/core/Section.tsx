import React from 'react';
import { cn } from '../../lib/utils';

// ============================================
// Section Component Props
// ============================================

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  variant?: 'default' | 'muted' | 'accent' | 'primary' | 'secondary';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'left' | 'center' | 'right';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
}

// ============================================
// Section - Modern Container Component
// ============================================

export function Section({
  children,
  title,
  subtitle,
  eyebrow,
  variant = 'default',
  padding = 'lg',
  align = 'left',
  maxWidth = '2xl',
  className,
  containerClassName,
  as: Component = 'section',
}: SectionProps) {
  // Variant styles using Shadcn color variables
  const variants = {
    default: 'bg-background text-foreground',
    muted: 'bg-muted text-foreground',
    accent: 'bg-accent text-accent-foreground',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
  };

  // Padding options
  const paddings = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
    '2xl': 'py-32 md:py-40',
  };

  // Alignment options
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Max width options
  const maxWidths = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1440px]',
    full: 'max-w-full',
  };

  const hasHeader = title || subtitle || eyebrow;

  return (
    <Component
      className={cn(
        'clip w-full',
        variants[variant],
        paddings[padding],
        className
      )}
    >
      <div
        className={cn(
          'mx-auto px-4 md:px-6 lg:px-8',
          maxWidths[maxWidth],
          containerClassName
        )}
      >
        {/* Header Section */}
        {hasHeader && (
          <div
            className={cn(
              'mb-12 space-y-4',
              alignments[align],
              maxWidth !== 'full' && 'max-w-3xl',
              align === 'center' && 'mx-auto',
              align === 'right' && 'ml-auto'
            )}
          >
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </Component>
  );
}

// ============================================
// SectionHeader - Standalone Header Component
// ============================================

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('space-y-4', alignments[align], className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
