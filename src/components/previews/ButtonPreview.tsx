import { useState } from 'react'
import { Button } from '../core/Button'
import { DocPage } from '../DocPage'

const componentCode = `import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default' | 'primary' | 'danger' | 'secondary' | 'accent';
  shape?: 'bu1' | 'bu2' | 'bu3' | 'bu4' | 'bu5' | 'bu6' | 'bu7';
  children: React.ReactNode;
}

export function Button({ 
  color = 'default', 
  shape = 'bu1', 
  children, 
  onClick, 
  className,
  ...props 
}: ButtonProps) {
  const colors = {
    default: 'bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95 active:bg-gray-950 border-2 border-black dark:bg-white dark:text-black dark:border-white',
    primary: 'bg-black text-primary hover:bg-gray-800 hover:border-b-primary/80 hover:scale-105 active:scale-95 border-2 border-black border-b-4 border-b-primary dark:bg-zinc-900 dark:border-zinc-800',
    danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 active:scale-95 border-2 border-destructive',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95 border-2 border-secondary',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/80 hover:scale-105 active:scale-95 border-2 border-accent',
  };

  const shapes = {
    bu1: 'shape(from 10.53% 100%,line to 0% 75.38%,vline to 0%,hline by 10.53%,vline by 100%,close,move by 0% -100%,hline by 78.95%,vline by 100%,hline to 10.53%,close,move by 89.47% 0%,hline by -10.53%,vline by 100%,hline by 10.53%,vline to 75%,line by -2.63% -6.25%,vline to 31.25%,line by 2.63% -6.25%,vline to 0%,close)',
    bu2: 'shape(from 2.67% 0%,hline by 10.67%,vline by 100%,hline to 2.67%,vline to 75%,line by -2.67% -6.25%,vline to 31.25%,line by 2.67% -6.25%,vline to 0%,close,move to 13.33% 0%,hline by 73.33%,vline by 100%,hline to 13.33%,close,move to 97.33% 0%,hline by -10.67%,vline by 100%,hline by 10.67%,vline to 75%,line by 2.67% -6.25%,vline to 31.25%,line by -2.67% -6.25%,vline to 0%,close)',
    bu3: 'shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 100% 0%,hline by -11.27%,vline by 100%,hline by 11.27%,vline to 75%,line by -2.82% -6.25%,vline to 31.25%,line by 2.82% -6.25%,vline to 0%,close)',
    bu4: 'shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 88.73% 100%,line by 11.27% -24.62%,vline to 0%,hline by -11.27%,vline by 100%,close)',
    bu5: 'shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 88.73% 0%,line by 11.27 24.62%,vline to 100%,hline by -11.27%,vline to 0%,close)',
    bu6: 'shape(from 2.58% 0%,hline by 10.32%,vline by 100%,hline to 2.58%,vline to 75%,line by -2.58% -6.25%,vline to 31.25%,line by 2.58% -6.25%,vline to 0%,close,move to 12.9% 0%,hline by 76.77%,vline by 100%,hline to 12.9%,close,move to 100% 0%,hline by -10.32%,vline by 100%,hline by 10.32%,vline to 75%,line by -2.58% -6.25%,vline to 31.25%,line by 2.58% -6.25%,vline to 0%,close)',
    bu7: 'shape(from 0% 0%,hline by 10.96%,vline by 100%,hline to 0%,vline to 75%,line by 2.74% -6.25%,vline to 31.25%,line by -2.74% -6.25%,vline to 0%,close,move to 10.96% 0%,hline by 75.34%,vline by 100%,hline to 10.96%,close,move to 97.26% 0%,hline by -10.96%,vline by 100%,hline by 10.96%,vline to 75%,line by 2.74% -6.25%,vline to 31.25%,line by -2.74% -6.25%,vline to 0%,close)',
  };

  return (
    <button
      {...props}
      className={cn(
        "px-8 py-3 font-bold uppercase text-sm transition-all duration-200 aspect-[2.5] min-w-fit flex items-center justify-center",
        colors[color],
        className
      )}
      style={{ clipPath: shapes[shape] }}
    >
      {children}
    </button>
  );
}`

const usageCode = `import { Button } from "@/components/core/Button"

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button color="primary" shape="bu1">Get Started</Button>
      <Button color="secondary" shape="bu2">Learn More</Button>
    </div>
  )
}`

const apiProps = [
  { name: "color", type: "'default' | 'primary' | 'danger' | 'secondary' | 'accent'", defaultValue: "'default'", description: "The color theme of the button." },
  { name: "shape", type: "'bu1' | 'bu2' | 'bu3' | 'bu4' | 'bu5' | 'bu6' | 'bu7'", defaultValue: "'bu1'", description: "The clipped shape of the button." },
  { name: "children", type: "ReactNode", description: "Button content." },
]

export function ButtonPreview() {
  const [data, setData] = useState({
    color: 'primary' as const,
    shape: 'bu1' as const,
    text: 'Click Me'
  })

  const shapes = ['bu1', 'bu2', 'bu3', 'bu4', 'bu5', 'bu6', 'bu7'] as const
  const colors = ['default', 'primary', 'danger', 'secondary', 'accent'] as const

  return (
    <DocPage
      name="Button"
      description="A futuristic clipped button component with multiple shapes and themes."
      code={componentCode}
      installationCode={componentCode}
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Color</label>
            <select 
              value={data.color} 
              onChange={(e) => setData({ ...data, color: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {colors.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Shape</label>
            <select 
              value={data.shape} 
              onChange={(e) => setData({ ...data, shape: e.target.value as any })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            >
              {shapes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Text</label>
            <input 
              type="text"
              value={data.text} 
              onChange={(e) => setData({ ...data, text: e.target.value })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none w-24"
            />
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-center py-12">
        <Button 
          color={data.color}
          shape={data.shape}
        >
          {data.text}
        </Button>
      </div>
    </DocPage>
  )
}
