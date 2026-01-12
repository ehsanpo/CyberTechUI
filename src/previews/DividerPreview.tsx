import { useState } from 'react';
import { Divider } from '../components/core/Divider';
import { DocPage } from '../components/DocPage';

const componentCode = `import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps {
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  thickness?: 1 | 2 | 4;
  className?: string;
  text?: string;
}

export function Divider({
  variant = 'solid',
  color = 'primary',
  thickness = 1,
  className = '',
  text = '',
}: DividerProps) {
  const colorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
    muted: 'border-muted-foreground',
  };

  const textColorClasses = {
    primary: 'text-primary-foreground bg-primary',
    secondary: 'text-secondary-foreground bg-secondary',
    accent: 'text-accent-foreground bg-accent',
    muted: 'text-foreground bg-muted',
  };

  const thicknessClasses = {
    1: 'border-b',
    2: 'border-b-2',
    4: 'border-b-4',
  };

  const fillColorClasses = {
    primary: 'fill-primary',
    secondary: 'fill-secondary',
    accent: 'fill-accent',
    muted: 'fill-muted-foreground',
  };

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
          className={cn('absolute', \`mt-\${thickness}\`, fillColorClasses[color])}
        >
          <path d="M0 0h64v2l-8 6H0V0z" />
        </svg>
      )}
    </div>
  );
}`;

const usageCode = `import { Divider } from '@/components/core/Divider'

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Simple divider */}
      <Divider />
      
      {/* With text label */}
      <Divider text="OR" color="primary" />
      
      {/* Dashed variant */}
      <Divider variant="dashed" color="accent" thickness={2} />
    </div>
  )
}`;

const apiProps = [
  { name: 'variant', type: "'solid' | 'dashed' | 'dotted'", defaultValue: "'solid'", description: 'The border style of the divider.' },
  { name: 'color', type: "'primary' | 'secondary' | 'accent' | 'muted'", defaultValue: "'primary'", description: 'The color theme of the divider.' },
  { name: 'thickness', type: '1 | 2 | 4', defaultValue: '1', description: 'The thickness in pixels.' },
  { name: 'text', type: 'string', defaultValue: "''", description: 'Optional text label (hides SVG decoration when provided).' },
  { name: 'className', type: 'string', description: 'Additional CSS classes.' },
];

export function DividerPreview() {
  const [data, setData] = useState({
    variant: 'solid' as const,
    color: 'primary' as const,
    thickness: 1 as const,
    text: '',
  });

  const variants = ['solid', 'dashed', 'dotted'] as const;
  const colors = ['primary', 'secondary', 'accent', 'muted'] as const;
  const thicknesses = [1, 2, 4] as const;

  return (
    <DocPage
      name="Divider"
      description="A line separator with optional text labels and decorative SVG elements for creating visual hierarchy."
      code={componentCode}
      installationCode={componentCode}
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
              {variants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Color</label>
            <select
              value={data.color}
              onChange={(e) => setData({ ...data, color: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {colors.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Thickness</label>
            <select
              value={data.thickness}
              onChange={(e) => setData({ ...data, thickness: parseInt(e.target.value) as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {thicknesses.map((t) => (
                <option key={t} value={t}>
                  {t}px
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Text</label>
            <input
              type="text"
              value={data.text}
              onChange={(e) => setData({ ...data, text: e.target.value })}
              placeholder="Optional"
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none w-24"
            />
          </div>
        </div>
      }
    >
      <div className="w-full flex items-center justify-center py-12 px-8">
        <div className="w-full max-w-md">
          <Divider
            variant={data.variant}
            color={data.color}
            thickness={data.thickness}
            text={data.text}
          />
        </div>
      </div>
    </DocPage>
  );
}
