import { useState } from 'react';
import { cn } from '../../lib/utils';

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
            "w-5 h-5 rounded-full border-2 bg-background transition-colors",
            error ? "border-destructive" : (isChecked || isFocus) ? "border-primary" : "border-muted-foreground",
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
}
