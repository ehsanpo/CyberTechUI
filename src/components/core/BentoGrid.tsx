import { type ReactNode, Children } from 'react';
import { cn } from '../../lib/utils';

interface BentoGridProps {
  children: ReactNode;
  gap?: 2 | 4 | 6 | 8;
  className?: string;
}

const gridGap = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8'
} as const;

export function BentoGrid({ 
  children, 
  gap = 4,
  className = '' 
}: BentoGridProps) {

  const childrenArray = Children.toArray(children);
  const rows = [];

  for (let i = 0; i < childrenArray.length; i += 7) {
    const rowChildren = childrenArray.slice(i, i + 7);
    
    rows.push(
      <div key={i} className={cn('flex flex-col', gridGap[gap])}>
        {rowChildren[0] && rowChildren[1] && (
          <div className={cn('grid grid-cols-1 md:grid-cols-5', gridGap[gap])}>
            <div className="md:col-span-2">{rowChildren[0]}</div>
            <div className="md:col-span-3">{rowChildren[1]}</div>
          </div>
        )}

        {rowChildren[2] && rowChildren[3] && (
          <div className={cn('grid grid-cols-1 md:grid-cols-5', gridGap[gap])}>
            <div className="md:col-span-3">{rowChildren[2]}</div>
            <div className="md:col-span-2">{rowChildren[3]}</div>
          </div>
        )}

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
