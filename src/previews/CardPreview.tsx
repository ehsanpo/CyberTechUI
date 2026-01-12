import { useState } from 'react';
import { Card } from '../components/core/Card';
import { DocPage } from '../components/DocPage';

const componentCode = `import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'primary' | 'secondary' | 'dark';
  shape?: 'none' | 'clip' | 'clip1' | 'clip2' | 'clip3';
  title: string;
  subtitle?: string;
  timestamp?: string;
  showMore?: boolean;
  className?: string;
}

export function Card({ 
  variant = 'secondary', 
  shape = 'none', 
  title, 
  subtitle, 
  timestamp, 
  showMore = false,
  className
}: CardProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground border-primary',
    secondary: 'bg-secondary text-secondary-foreground border-border',
    dark: 'bg-card text-card-foreground border-primary'
  };

  const accentColor = variant === 'dark' ? 'bg-primary' : 'bg-foreground';
  
  const shapes = {
    none: '',
    clip: 'polygon(...)', // Original clip paths
    clip1: 'shape(...)',
    clip2: 'shape(...)',
    clip3: 'shape(...)',
  };

  return (
    <div 
      className={cn(variants[variant], 'border-2 p-6 min-w-[200px] h-full flex flex-col', className)}
      style={{ clipPath: shapes[shape] }}
    >
      <div className={cn(accentColor, 'h-1 w-8 mb-4')}></div>
      {timestamp && <p className="text-xs mb-2 opacity-70">{timestamp}</p>}
      <h3 className="text-lg font-bold mb-2 uppercase">{title}</h3>
      {subtitle && <p className="text-sm opacity-70 mb-4">{subtitle}</p>}
      <div className="flex-grow"></div>
      {showMore && (
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-current opacity-50">
          <div className={cn(accentColor, 'h-1 w-6')}></div>
          <span className="text-xs font-bold uppercase tracking-wider">MORE</span>
        </div>
      )}
    </div>
  );
}`;

const usageCode = `import { Card } from '@/components/core/Card'

export default function Example() {
  return (
    <Card 
      variant="dark" 
      shape="clip2" 
      title="Neural Network" 
      subtitle="Deep learning optimization protocol" 
      timestamp="2024-05-20"
      showMore
    />
  )
}`;

const apiProps = [
  { name: 'variant', type: "'primary' | 'secondary' | 'dark'", defaultValue: "'secondary'", description: 'The color theme of the card.' },
  { name: 'shape', type: "'none' | 'clip' | 'clip1' | 'clip2' | 'clip3'", defaultValue: "'none'", description: 'The clipped shape of the card.' },
  { name: 'title', type: 'string', description: 'Main title of the card.' },
  { name: 'subtitle', type: 'string', description: 'Optional subtitle text.' },
  { name: 'timestamp', type: 'string', description: 'Optional date or time string.' },
  { name: 'showMore', type: 'boolean', defaultValue: 'false', description: 'Whether to show the footer "MORE" section.' },
];

export function CardPreview() {
  const [data, setData] = useState({
    variant: 'dark' as const,
    shape: 'clip2' as const,
    title: 'Neural Interface',
    subtitle: 'Direct brain-to-machine link established.',
    timestamp: 'MAY 21, 2024',
    showMore: true
  });

  const variants = ['primary', 'secondary', 'dark'] as const;
  const shapes = ['none', 'clip', 'clip1', 'clip2', 'clip3'] as const;

  return (
    <DocPage
      name="Card"
      description="A premium informational container with futuristic clipped shapes and thematic color variants."
      code={componentCode}
      installationCode={componentCode} // Using same as component for now
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Variant</label>
            <select 
              value={data.variant} 
              onChange={(e) => setData({ ...data, variant: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Shape</label>
            <select 
              value={data.shape} 
              onChange={(e) => setData({ ...data, shape: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {shapes.map(s => <option key={s} value={s}>{s === 'none' ? 'Default' : s}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <input 
              type="checkbox" 
              checked={data.showMore} 
              onChange={(e) => setData({ ...data, showMore: e.target.checked })} 
              className="mr-2"
            />
            Show More
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-sm">
          <Card 
            variant={data.variant}
            shape={data.shape}
            title={data.title}
            subtitle={data.subtitle}
            timestamp={data.timestamp}
            showMore={data.showMore}
          />
        </div>
      </div>
    </DocPage>
  );
}
