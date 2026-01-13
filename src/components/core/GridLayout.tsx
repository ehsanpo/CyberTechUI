import { cn } from '../../lib/utils';

interface GridLayoutProps {
  backgroundColor?: 'primary' | 'background';
  primaryColor?: 'primary' | 'secondary' | 'accent' | 'destructive';
  className?: string;
}

const bgColors = {
  primary: 'bg-primary',
  background: 'bg-background'
} as const;

const primaryColors = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  destructive: 'bg-destructive'
} as const;

export function GridLayout({ 
  backgroundColor = 'background', 
  primaryColor = 'primary',
  className 
}: GridLayoutProps) {

  const secondaryColor = backgroundColor === 'primary' ? 'bg-primary' : 'bg-background';
  const borderColor = backgroundColor === 'primary' ? 'border-background' : 'border-primary';

  return (
    <div className={cn(bgColors[backgroundColor], 'p-8', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={cn(primaryColors[primaryColor], 'aspect-square border-2', borderColor)}></div>
        <div className="grid grid-cols-1 gap-4">
          <div className={cn(secondaryColor, 'border-2', borderColor, 'h-24 md:h-auto')}></div>
          <div className={cn(secondaryColor, 'border-2', borderColor, 'h-24 md:h-auto')}></div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className={cn(secondaryColor, 'border-2', borderColor, 'h-24 md:h-auto')}></div>
          <div className={cn(secondaryColor, 'border-2', borderColor, 'h-24 md:h-auto')}></div>
        </div>
      </div>
    </div>
  );
}
