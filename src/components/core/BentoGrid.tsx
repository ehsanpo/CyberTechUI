import { type ReactNode, Children } from 'react';
import { cn } from '../../lib/utils';

// ============================================
// BentoGrid Component Props
// ============================================

interface BentoGridProps {
  children: ReactNode;
  gap?: 2 | 4 | 6 | 8;
  className?: string;
}

// ============================================
// BentoGrid - Futuristic Grid Layout
// ============================================

export function BentoGrid({ 
  children, 
  gap = 4,
  className = '' 
}: BentoGridProps) {
  const gridGap = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };

  const childrenArray = Children.toArray(children);
  const rows = [];

  for (let i = 0; i < childrenArray.length; i += 7) {
    const rowChildren = childrenArray.slice(i, i + 7);
    
    rows.push(
      <div key={i} className={cn('flex flex-col', gridGap[gap])}>
        {/* Row 1: 2 columns, wider right */}
        {rowChildren[0] && rowChildren[1] && (
          <div className={cn('grid grid-cols-1 md:grid-cols-5', gridGap[gap])}>
            <div className="md:col-span-2">{rowChildren[0]}</div>
            <div className="md:col-span-3">{rowChildren[1]}</div>
          </div>
        )}

        {/* Row 2: 2 columns, wider left */}
        {rowChildren[2] && rowChildren[3] && (
          <div className={cn('grid grid-cols-1 md:grid-cols-5', gridGap[gap])}>
            <div className="md:col-span-3">{rowChildren[2]}</div>
            <div className="md:col-span-2">{rowChildren[3]}</div>
          </div>
        )}

        {/* Row 3: 3 columns */}
        {rowChildren[4] && (
          <div className={cn('grid grid-cols-1 md:grid-cols-3', gridGap[gap])}>
            <div>{rowChildren[4]}</div>
            <div>{rowChildren[5] || null}</div>
            <div>{rowChildren[6] || null}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col', gridGap[gap], className)}>
      {rows}
    </div>
  );
}
