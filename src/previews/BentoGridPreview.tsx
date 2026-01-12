import { useState } from 'react';
import { BentoGrid } from '../components/core/BentoGrid';
import { DocPage } from '../components/DocPage';
import { cn } from '../lib/utils';

const componentCode = `import { ReactNode, Children } from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: ReactNode;
  gap?: 2 | 4 | 6 | 8;
  className?: string;
}

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
        {rowChildren[0] && rowChildren[1] && (
          <div className={cn('grid grid-cols-5', gridGap[gap])}>
            <div className="col-span-2">{rowChildren[0]}</div>
            <div className="col-span-3">{rowChildren[1]}</div>
          </div>
        )}

        {rowChildren[2] && rowChildren[3] && (
          <div className={cn('grid grid-cols-5', gridGap[gap])}>
            <div className="col-span-3">{rowChildren[2]}</div>
            <div className="col-span-2">{rowChildren[3]}</div>
          </div>
        )}

        {rowChildren[4] && (
          <div className={cn('grid grid-cols-3', gridGap[gap])}>
            <div>{rowChildren[4]}</div>
            <div>{rowChildren[5]}</div>
            <div>{rowChildren[6]}</div>
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
}`;

const usageCode = `import { BentoGrid } from '@/components/core/BentoGrid'

export default function Example() {
  return (
    <BentoGrid gap={4}>
      <div className="bg-primary/20 p-8 rounded-lg border-2 border-primary/50 aspect-video flex items-center justify-center font-bold">1</div>
      <div className="bg-secondary/20 p-8 rounded-lg border-2 border-secondary/50 aspect-auto flex items-center justify-center font-bold">2</div>
      <div className="bg-accent/20 p-8 rounded-lg border-2 border-accent/50 aspect-auto flex items-center justify-center font-bold">3</div>
      <div className="bg-primary/10 p-8 rounded-lg border-2 border-primary/20 aspect-video flex items-center justify-center font-bold">4</div>
      <div className="bg-secondary/10 p-8 rounded-lg border-2 border-secondary/20 aspect-square flex items-center justify-center font-bold">5</div>
      <div className="bg-accent/10 p-8 rounded-lg border-2 border-accent/20 aspect-square flex items-center justify-center font-bold">6</div>
      <div className="bg-muted p-8 rounded-lg border-2 border-border aspect-square flex items-center justify-center font-bold">7</div>
    </BentoGrid>
  )
}`;

const apiProps = [
  { name: 'children', type: 'ReactNode', description: 'The items to be displayed in the grid. Works in groups of 7.' },
  { name: 'gap', type: '2 | 4 | 6 | 8', defaultValue: '4', description: 'The gap between grid items.' },
  { name: 'className', type: 'string', description: 'Additional CSS classes.' },
];

function GridItem({ index, color }: { index: number; color: string }) {
  return (
    <div className={cn(
      "w-full h-full min-h-[120px] rounded-lg border-2 flex flex-col items-center justify-center p-6 transition-all hover:scale-[1.02]",
      color === 'primary' && "bg-primary/5 border-primary/20 text-primary",
      color === 'secondary' && "bg-secondary/5 border-secondary/20 text-secondary-foreground",
      color === 'accent' && "bg-accent/5 border-accent/20 text-accent-foreground",
      color === 'muted' && "bg-muted/50 border-border text-muted-foreground",
    )}>
      <span className="text-3xl font-bold font-bai mb-1">{index}</span>
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Item Card</span>
    </div>
  );
}

export function BentoGridPreview() {
  const [data, setData] = useState({
    gap: 4 as const,
  });

  const gaps = [2, 4, 6, 8] as const;

  return (
    <DocPage
      name="BentoGrid"
      description="A sophisticated bento-box style grid layout that automatically arranges items in a unique 7-item rhythmic pattern."
      code={componentCode}
      installationCode={componentCode}
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Grid Gap</label>
            <select
              value={data.gap}
              onChange={(e) => setData({ ...data, gap: parseInt(e.target.value) as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {gaps.map((g) => (
                <option key={g} value={g}>
                  Gap {g}
                </option>
              ))}
            </select>
          </div>
        </div>
      }
    >
      <div className="py-8">
        <BentoGrid gap={data.gap}>
          <GridItem index={1} color="primary" />
          <GridItem index={2} color="secondary" />
          <GridItem index={3} color="accent" />
          <GridItem index={4} color="primary" />
          <GridItem index={5} color="muted" />
          <GridItem index={6} color="secondary" />
          <GridItem index={7} color="accent" />
        </BentoGrid>
      </div>
    </DocPage>
  );
}
