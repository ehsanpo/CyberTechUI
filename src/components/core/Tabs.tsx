import { useState } from 'react';
import { cn } from '../../lib/utils';

interface TabsProps {
  tabs: { id: string, label: string, content: React.ReactNode }[];
  className?: string;
}

export function Tabs({ tabs, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const getTabClass = (index: number) => {
    const totalTabs = tabs.length;
    if (totalTabs === 2) return index === 0 ? 'bu1' : 'bu5';
    if (totalTabs === 3) {
      if (index === 0) return 'bu1';
      if (index === 1) return 'bu2';
      return 'bu5';
    }
    if (totalTabs === 4) {
      if (index === 0) return 'bu1';
      if (index === 1) return 'bu6';
      if (index === 2) return 'bu2';
      return 'bu5';
    }
    if (index === 0) return 'bu1';
    if (index === 1) return 'bu6';
    if (index === 2) return 'bu2';
    if (index === totalTabs - 1) return 'bu5';
    return 'bu7';
  };

  return (
    <div className="flex flex-col gap-8">
      <style>{`
        .bu1 { clip-path: shape(from 10.53% 100%,line to 0% 75.38%,vline to 0%,hline by 10.53%,vline by 100%,close,move by 0% -100%,hline by 78.95%,vline by 100%,hline to 10.53%,close,move by 89.47% 0%,hline by -10.53%,vline by 100%,hline by 10.53%,vline to 75%,line by -2.63% -6.25%,vline to 31.25%,line by 2.63% -6.25%,vline to 0%,close); }
        .bu2 { clip-path: shape(from 2.67% 0%,hline by 10.67%,vline by 100%,hline to 2.67%,vline to 75%,line by -2.67% -6.25%,vline to 31.25%,line by 2.67% -6.25%,vline to 0%,close,move to 13.33% 0%,hline by 73.33%,vline by 100%,hline to 13.33%,close,move to 97.33% 0%,hline by -10.67%,vline by 100%,hline by 10.67%,vline to 75%,line by 2.67% -6.25%,vline to 31.25%,line by -2.67% -6.25%,vline to 0%,close); }
        .bu5 { clip-path: shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 88.73% 0%,line by 11.27% 24.62%,vline to 100%,hline by -11.27%,vline to 0%,close); }
        .bu6 { clip-path: shape(from 2.58% 0%,hline by 10.32%,vline by 100%,hline to 2.58%,vline to 75%,line by -2.58% -6.25%,vline to 31.25%,line by 2.58% -6.25%,vline to 0%,close,move to 12.9% 0%,hline by 76.77%,vline by 100%,hline to 12.9%,close,move to 100% 0%,hline by -10.32%,vline by 100%,hline by 10.32%,vline to 75%,line by -2.58% -6.25%,vline to 31.25%,line by 2.58% -6.25%,vline to 0%,close); }
        .bu7 { clip-path: shape(from 0% 0%,hline by 10.96%,vline by 100%,hline to 0%,vline to 75%,line by 2.74% -6.25%,vline to 31.25%,line by -2.74% -6.25%,vline to 0%,close,move to 10.96% 0%,hline by 75.34%,vline by 100%,hline to 10.96%,close,move to 97.26% 0%,hline by -10.96%,vline by 100%,hline by 10.96%,vline to 75%,line by 2.74% -6.25%,vline to 31.25%,line by -2.74% -6.25%,vline to 0%,close); }
      `}</style>
      <div className={cn("flex flex-wrap gap-y-2", className)}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-6 py-4 mx-0 font-bold uppercase text-sm transition-all duration-200 font-mono tracking-wider",
              getTabClass(index),
              index === activeTab
                ? "bg-primary text-black"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="relative p-6 border border-primary/20 bg-card rounded-sm overflow-hidden min-h-[300px] flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
