import { useState } from 'react';
import { Tabs } from '../components/core/Tabs';
import { DocPage } from '../components/DocPage';

const componentCode = `import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  tabs: string[];
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
    <>
      <style>{\`
        .bu1 { clip-path: shape(...); }
        .bu2 { clip-path: shape(...); }
        .bu5 { clip-path: shape(...); }
        .bu6 { clip-path: shape(...); }
        .bu7 { clip-path: shape(...); }
      \`}</style>
      <div className={cn("flex flex-wrap gap-y-2", className)}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-6 py-3 font-bold uppercase text-sm border-2 transition-all font-bai",
              getTabClass(index),
              index === activeTab
                ? "bg-primary text-primary-foreground border-primary scale-105 z-10"
                : "bg-background text-foreground border-border hover:bg-muted"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
}`;

const usageCode = `import { Tabs } from '@/components/core/Tabs'

export default function Example() {
  return (
    <div className="space-y-8">
      <Tabs tabs={['Profile', 'Settings']} />
      <Tabs tabs={['Neural', 'Synapse', 'Cortex']} />
      <Tabs tabs={['Home', 'Docs', 'API', 'Pricing']} />
    </div>
  )
}`;

const apiProps = [
  { name: 'tabs', type: 'string[]', description: 'Array of tab labels. The component automatically adjusts shapes based on the number of tabs.' },
  { name: 'className', type: 'string', description: 'Additional CSS classes.' },
];

export function TabsPreview() {
  const [data, setData] = useState({
    tabsString: 'CORE, MISSION, INTEL',
  });

  const tabsArray = data.tabsString.split(',').map(t => t.trim()).filter(Boolean);

  return (
    <DocPage
      name="Tabs"
      description="Interactive tab switcher with futuristic clipped shapes that dynamically adapt based on the number of items."
      code={componentCode}
      installationCode={componentCode}
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Tabs (comma separated)</label>
            <input
              type="text"
              value={data.tabsString}
              onChange={(e) => setData({ ...data, tabsString: e.target.value })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none w-48"
            />
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-center py-12 px-6">
        <Tabs tabs={tabsArray.length > 0 ? tabsArray : ['EMPTY']} />
      </div>
    </DocPage>
  );
}
