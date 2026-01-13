import { useState } from 'react';
import { cn } from '../../lib/utils';

interface CheckboxProps {
  label: string;
  defaultChecked?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const CLIP_PATH = "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)";

export function Checkbox({ 
  label, 
  defaultChecked = false, 
  error = false, 
  onChange,
  className 
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange?.(checked);
  };

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer py-2 group", className)}>
      <div className="relative">
        <div
          className={cn(
            "w-5 h-5 transition-colors flex items-center justify-center",
            error ? "bg-destructive" : (isChecked || isFocus) ? "bg-primary" : "bg-muted-foreground"
          )}
          style={{ clipPath: CLIP_PATH }}
        >
          <div 
            className={cn(
              "w-[calc(100%-2px)] h-[calc(100%-2px)] transition-colors",
              error ? "bg-background" : isChecked ? "bg-primary-foreground" : "bg-background"
            )}
            style={{ clipPath: CLIP_PATH }}
          >
            <div 
              className={cn(
                "w-full h-full bg-primary transition-all duration-200",
                isChecked ? "opacity-100 scale-75" : "opacity-0 scale-50"
              )}
              style={{ clipPath: CLIP_PATH }}
            />
          </div>
        </div>
      </div>
      
      <span className={cn(
        "text-sm uppercase tracking-wider font-bai font-medium transition-colors",
        error ? "text-destructive" : isChecked ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
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
}
