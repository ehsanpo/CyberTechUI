import { cn } from '../../lib/utils';

// ============================================
// Divider Component Props
// ============================================

interface DividerProps {
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  thickness?: 1 | 2 | 4;
  className?: string;
  text?: string;
}

// ============================================
// Divider - Line Separator with SVG Decoration
// ============================================

export function Divider({
  variant = 'solid',
  color = 'primary',
  thickness = 1,
  className = '',
  text = '',
}: DividerProps) {
  // Border color classes using Shadcn variables
  const colorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
    muted: 'border-muted-foreground',
  };

  // Text/background color classes for text labels
  const textColorClasses = {
    primary: 'text-primary-foreground bg-primary',
    secondary: 'text-secondary-foreground bg-secondary',
    accent: 'text-accent-foreground bg-accent',
    muted: 'text-foreground bg-muted',
  };

  // Thickness classes
  const thicknessClasses = {
    1: 'border-b',
    2: 'border-b-2',
    4: 'border-b-4',
  };

  // SVG fill color classes
  const fillColorClasses = {
    primary: 'fill-primary',
    secondary: 'fill-secondary',
    accent: 'fill-accent',
    muted: 'fill-muted-foreground',
  };

  // Border variant styles
  const borderStyles = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  };

  return (
    <div
      className={cn(
        'mb-2 leading-none',
        colorClasses[color],
        borderStyles[variant],
        thicknessClasses[thickness],
        className
      )}
      role="separator"
      aria-orientation="horizontal"
    >
      {text ? (
        <div
          className={cn(
            'inline-block px-2 text-sm uppercase tracking-wider',
            textColorClasses[color]
          )}
        >
          {text}
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="8"
          viewBox="0 0 64 8"
          className={cn(
            'absolute',
            thickness === 1 && 'mt-[1px]',
            thickness === 2 && 'mt-[2px]',
            thickness === 4 && 'mt-[4px]',
            fillColorClasses[color]
          )}
        >
          <path d="M0 0h64v2l-8 6H0V0z" />
        </svg>
      )}
    </div>
  );
}
