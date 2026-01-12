import { useState } from 'react';
import { Checkbox } from '../components/core/Checkbox';
import { DocPage } from '../components/DocPage';

const componentCode = `import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  label: string;
  defaultChecked?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({ 
  label, 
  defaultChecked = false, 
  error = false, 
  onChange,
  className 
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isFocus, setIsFocus] = useState(false);
  const isError = error;

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange?.(checked);
  };

  const clipPath = "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)";

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer py-2 group", className)}>
      <div className="relative">
        <div
          className={cn(
            "w-5 h-5 transition-colors flex items-center justify-center",
            isError ? "bg-destructive" : isChecked || isFocus ? "bg-primary" : "bg-muted-foreground"
          )}
          style={{ clipPath }}
        >
          <div 
            className={cn(
              "w-[calc(100%-2px)] h-[calc(100%-2px)] transition-colors",
              isError ? "bg-background" : isChecked ? "bg-primary-foreground" : "bg-background"
            )}
            style={{ clipPath }}
          >
            <div 
              className={cn(
                "w-full h-full bg-primary transition-all duration-200",
                isChecked ? "opacity-100 scale-75" : "opacity-0 scale-50"
              )}
              style={{ clipPath }}
            />
          </div>
        </div>
      </div>
      <span className={cn(
        "text-sm uppercase tracking-wider font-bai font-medium transition-colors",
        isError ? "text-destructive" : isChecked ? "text-primary" : "text-muted-foreground"
      )}>
        {label}
      </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleChange(e.target.checked)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="sr-only"
      />
    </label>
  );
}`;

const usageCode = `import { Checkbox } from '@/components/core/Checkbox'

export default function Example() {
  return (
    <div className="space-y-2">
      <Checkbox label="Accept Terms" />
      <Checkbox label="Subscribe" defaultChecked />
      <Checkbox label="Error State" error />
    </div>
  )
}`;

const apiProps = [
  { name: 'label', type: 'string', description: 'The text label for the checkbox.' },
  { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial checked state.' },
  { name: 'error', type: 'boolean', defaultValue: 'false', description: 'Whether the checkbox is in an error state.' },
  { name: 'onChange', type: '(checked: boolean) => void', description: 'Callback function when state changes.' },
];

export function CheckboxPreview() {
  const [data, setData] = useState({
    label: 'Cyber Subscription',
    defaultChecked: false,
    error: false,
  });

  return (
    <DocPage
      name="Checkbox"
      description="A stylized cyberpunk checkbox with a custom clipped border and indicator."
      code={componentCode}
      installationCode={componentCode}
      usageCode={usageCode}
      apiProps={apiProps}
      sampleData={data}
      onSampleDataChange={setData}
      controls={
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Label</label>
            <input
              type="text"
              value={data.label}
              onChange={(e) => setData({ ...data, label: e.target.value })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={data.defaultChecked}
                onChange={(e) => setData({ ...data, defaultChecked: e.target.checked })}
                className="rounded border-border"
              />
              Checked
            </label>
            <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={data.error}
                onChange={(e) => setData({ ...data, error: e.target.checked })}
                className="rounded border-border"
              />
              Error
            </label>
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-center py-12">
        <Checkbox
          key={`${data.defaultChecked}-${data.error}-${data.label}`} // Force re-render on prop change for preview
          label={data.label}
          defaultChecked={data.defaultChecked}
          error={data.error}
        />
      </div>
    </DocPage>
  );
}
