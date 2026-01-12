import { useState } from 'react';
import { Radio } from '../components/core/Radio';
import { DocPage } from '../components/DocPage';

const componentCode = `import { useState } from 'react';
import { cn } from '@/lib/utils';

interface RadioProps {
  label: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export function Radio({ 
  label, 
  name, 
  value, 
  defaultChecked = false, 
  error = false, 
  onChange,
  className
}: RadioProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = () => {
    setIsChecked(true);
    onChange?.(value);
  };

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer py-2 group", className)}>
      <div className="relative">
        <div
          className={cn(
            "w-5 h-5 rounded-full border-2 transition-colors",
            error
              ? "border-destructive bg-background"
              : isChecked || isFocus
              ? "border-primary bg-background"
              : "border-muted-foreground bg-background",
            isFocus && "ring-2 ring-primary ring-opacity-50"
          )}
        >
          {isChecked && (
            <div className="w-2.5 h-2.5 rounded-full bg-primary absolute inset-0 m-auto" />
          )}
        </div>
      </div>
      <span className={cn(
        "text-sm uppercase tracking-wider font-bai font-medium transition-colors",
        error ? "text-destructive" : isChecked ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
      )}>
        {label}
      </span>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="sr-only"
      />
    </label>
  );
}`;

const usageCode = `import { Radio } from '@/components/core/Radio'

export default function Example() {
  return (
    <div className="space-y-1">
      <Radio name="tech" value="react" label="React Framework" defaultChecked />
      <Radio name="tech" value="vue" label="Vue Framework" />
      <Radio name="tech" value="angular" label="Angular Framework" error />
    </div>
  )
}`;

const apiProps = [
  { name: 'label', type: 'string', description: 'The text label for the radio button.' },
  { name: 'name', type: 'string', description: 'The name of the radio group.' },
  { name: 'value', type: 'string', description: 'The value of the radio button.' },
  { name: 'defaultChecked', type: 'boolean', defaultValue: 'false', description: 'Initial checked state.' },
  { name: 'error', type: 'boolean', defaultValue: 'false', description: 'Whether the radio is in an error state.' },
  { name: 'onChange', type: '(value: string) => void', description: 'Callback function when selected.' },
];

export function RadioPreview() {
  const [data, setData] = useState({
    label: 'Cyber Integration',
    name: 'cyber',
    value: 'enabled',
    defaultChecked: false,
    error: false,
  });

  return (
    <DocPage
      name="Radio"
      description="A stylized circular radio button with focus and error states."
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
        <Radio
          key={`${data.defaultChecked}-${data.error}-${data.label}`} // Force re-render for preview
          name={data.name}
          value={data.value}
          label={data.label}
          defaultChecked={data.defaultChecked}
          error={data.error}
        />
      </div>
    </DocPage>
  );
}
