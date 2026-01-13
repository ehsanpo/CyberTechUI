import { cn } from '../../lib/utils';

interface DividerProps {
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  thickness?: 1 | 2 | 4;
  className?: string;
  text?: string;
}

const colorClasses = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  accent: 'border-accent',
  muted: 'border-muted-foreground',
} as const;

const textColorClasses = {
  primary: 'text-primary-foreground bg-primary',
  secondary: 'text-secondary-foreground bg-secondary',
  accent: 'text-accent-foreground bg-accent',
  muted: 'text-foreground bg-muted',
} as const;

const thicknessClasses = {
  1: 'border-b',
  2: 'border-b-2',
  4: 'border-b-4',
} as const;

const fillColorClasses = {
  primary: 'fill-primary',
  secondary: 'fill-secondary',
  accent: 'fill-accent',
  muted: 'fill-muted-foreground',
} as const;

const borderStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
} as const;

export function Divider({
  variant = 'solid',
  color = 'primary',
  thickness = 1,
  className = '',
  text = '',
}: DividerProps) {

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
