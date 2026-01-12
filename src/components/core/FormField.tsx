import { cn } from '../../lib/utils';

// ============================================
// FormField Component Props
// ============================================

interface FormFieldProps {
  label: string;
  placeholder?: string;
  variant?: 'default' | 'accent' | 'error';
  value?: string;
  onChange?: (value: string) => void;
  className?: string; // Standard className prop
}

// ============================================
// FormField - Stylized Input Field
// ============================================

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
}
