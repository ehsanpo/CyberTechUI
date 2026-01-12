import { useState } from 'react';
import { GridLayout } from '../components/core/GridLayout';
import { DocPage } from '../components/DocPage';

const componentCode = `import React from 'react';
import { cn } from '@/lib/utils';

interface GridLayoutProps {
  backgroundColor?: 'primary' | 'background';
  primaryColor?: 'primary' | 'secondary' | 'accent' | 'destructive';
  className?: string;
}

export function GridLayout({ 
  backgroundColor = 'background', 
  primaryColor = 'primary',
  className 
}: GridLayoutProps) {
  const bgColors = {
    primary: 'bg-primary',
    background: 'bg-background'
  };

  const primaryColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    destructive: 'bg-destructive'
  };

  const secondaryColor = backgroundColor === 'primary' ? 'bg-primary' : 'bg-background';
  const borderColor = backgroundColor === 'primary' ? 'border-background' : 'border-primary';

  return (
    <div className={cn(bgColors[backgroundColor], 'p-8', className)}>
      <div className="grid grid-cols-2 gap-4">
        <div className={cn(primaryColors[primaryColor], 'aspect-square border-2', borderColor)}></div>
        <div className="grid grid-cols-1 gap-4">
          <div className={cn(secondaryColor, 'border-2', borderColor)}></div>
          <div className={cn(secondaryColor, 'border-2', borderColor)}></div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className={cn(secondaryColor, 'border-2', borderColor)}></div>
          <div className={cn(secondaryColor, 'border-2', borderColor)}></div>
        </div>
      </div>
    </div>
  );
}`;

const usageCode = `import { GridLayout } from '@/components/core/GridLayout'

export default function Example() {
  return (
    <GridLayout 
      backgroundColor="background" 
      primaryColor="primary" 
    />
  )
}`;

const apiProps = [
  { name: 'backgroundColor', type: "'primary' | 'background'", defaultValue: "'background'", description: 'The background color of the grid container.' },
  { name: 'primaryColor', type: "'primary' | 'secondary' | 'accent' | 'destructive'", defaultValue: "'primary'", description: 'The color of the main grid cell.' },
  { name: 'className', type: 'string', description: 'Additional CSS classes.' },
];

export function GridLayoutPreview() {
  const [data, setData] = useState({
    backgroundColor: 'background' as const,
    primaryColor: 'primary' as const,
  });

  const backgroundColors = ['primary', 'background'] as const;
  const primaryColors = ['primary', 'secondary', 'accent', 'destructive'] as const;

  return (
    <DocPage
      name="GridLayout"
      description="A simple grid layout pattern with customizable colors."
      code={componentCode}
      installationCode={componentCode}
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Background</label>
            <select
              value={data.backgroundColor}
              onChange={(e) => setData({ ...data, backgroundColor: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {backgroundColors.map((bg) => (
                <option key={bg} value={bg}>
                  {bg}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Primary Color</label>
            <select
              value={data.primaryColor}
              onChange={(e) => setData({ ...data, primaryColor: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {primaryColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      }
    >
      <div className="w-full flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <GridLayout
            backgroundColor={data.backgroundColor}
            primaryColor={data.primaryColor}
          />
        </div>
      </div>
    </DocPage>
  );
}
