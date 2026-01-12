import { useState } from 'react';
import { FormField } from '../components/core/FormField';
import { DocPage } from '../components/DocPage';

const componentCode = `import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  variant?: 'default' | 'accent' | 'error';
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function FormField({ 
  label, 
  placeholder = 'Name', 
  variant = 'default', 
  value, 
  onChange,
  className
}: FormFieldProps) {
  const variants = {
    default: 'bg-background text-foreground border-border',
    accent: 'bg-primary text-primary-foreground border-primary',
    error: 'bg-destructive/10 text-destructive border-destructive'
  };

  const labelColors = {
    default: 'text-primary',
    accent: 'text-primary',
    error: 'text-destructive'
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label className={cn("text-xs uppercase tracking-wider font-bai font-bold", labelColors[variant])}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-full px-4 py-3 border-2 transition-all duration-200 outline-none",
          "placeholder:text-muted-foreground/50",
          "focus:ring-2 focus:ring-primary focus:ring-opacity-50",
          variants[variant]
        )}
      />
    </div>
  );
}`;

const usageCode = `import { FormField } from '@/components/core/FormField'

export default function Example() {
  return (
    <div className="max-w-md space-y-4">
      <FormField label="Full Name" placeholder="John Doe" />
      <FormField label="Cyber ID" placeholder="C-782" variant="accent" />
      <FormField label="Password" placeholder="••••••••" variant="error" />
    </div>
  )
}`;

const apiProps = [
  { name: 'label', type: 'string', description: 'The label text displayed above the input.' },
  { name: 'placeholder', type: 'string', defaultValue: "'Name'", description: 'Placeholder text for the input.' },
  { name: 'variant', type: "'default' | 'accent' | 'error'", defaultValue: "'default'", description: 'The visual style variant of the input.' },
  { name: 'value', type: 'string', description: 'The input value.' },
  { name: 'onChange', type: '(value: string) => void', description: 'Callback function when the value changes.' },
];

export function FormFieldPreview() {
  const [data, setData] = useState({
    label: 'Username',
    placeholder: 'Enter your ghost name...',
    variant: 'default' as const,
    value: '',
  });

  const variants = ['default', 'accent', 'error'] as const;

  return (
    <DocPage
      name="FormField"
      description="A premium text input field with themed variants and clear typography."
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
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Label</label>
            <input
              type="text"
              value={data.label}
              onChange={(e) => setData({ ...data, label: e.target.value })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Placeholder</label>
            <input
              type="text"
              value={data.placeholder}
              onChange={(e) => setData({ ...data, placeholder: e.target.value })}
              className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
        </div>
      }
    >
      <div className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-sm">
          <FormField
            label={data.label}
            placeholder={data.placeholder}
            variant={data.variant}
            value={data.value}
            onChange={(val) => setData({ ...data, value: val })}
          />
        </div>
      </div>
    </DocPage>
  );
}
