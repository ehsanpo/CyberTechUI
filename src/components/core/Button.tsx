import React from 'react';
import { cn } from "../../lib/utils";

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
    default: 'bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95 active:bg-gray-950 border-b-2 border-black',
    primary: 'cd p bg-black text-primary hover:bg-gray-800 hover:border-b-primary/80 hover:scale-105 active:scale-95 border-b-2 border-black border-b-4 border-b-primary',
    danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 active:scale-95 active:bg-destructive/80 border-b-2 border-destructive',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 active:scale-95 active:bg-secondary/60 border-b-2 border-secondary',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/80 hover:scale-105 active:scale-95 active:bg-accent/60 border-b-2 border-accent',
  };

  return (
    <>
      <style>{`
        .bu1 { clip-path: shape(from 10.53% 100%,line to 0% 75.38%,vline to 0%,hline by 10.53%,vline by 100%,close,move by 0% -100%,hline by 78.95%,vline by 100%,hline to 10.53%,close,move by 89.47% 0%,hline by -10.53%,vline by 100%,hline by 10.53%,vline to 75%,line by -2.63% -6.25%,vline to 31.25%,line by 2.63% -6.25%,vline to 0%,close); }
        .bu2 { clip-path: shape(from 2.67% 0%,hline by 10.67%,vline by 100%,hline to 2.67%,vline to 75%,line by -2.67% -6.25%,vline to 31.25%,line by 2.67% -6.25%,vline to 0%,close,move to 13.33% 0%,hline by 73.33%,vline by 100%,hline to 13.33%,close,move to 97.33% 0%,hline by -10.67%,vline by 100%,hline by 10.67%,vline to 75%,line by 2.67% -6.25%,vline to 31.25%,line by -2.67% -6.25%,vline to 0%,close); }
        .bu3 { clip-path: shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 100% 0%,hline by -11.27%,vline by 100%,hline by 11.27%,vline to 75%,line by -2.82% -6.25%,vline to 31.25%,line by 2.82% -6.25%,vline to 0%,close); }
        .bu4 { clip-path: shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 88.73% 100%,line by 11.27% -24.62%,vline to 0%,hline by -11.27%,vline by 100%,close); }
        .bu5 { clip-path: shape(from 0% 0%,hline by 11.27%,vline by 100%,hline to 0%,vline to 75%,line by 2.82% -6.25%,vline to 31.25%,line by -2.82% -6.25%,vline to 0%,close,move to 11.27% 0%,hline by 77.46%,vline by 100%,hline to 11.27%,close,move to 88.73% 0%,line by 11.27% 24.62%,vline to 100%,hline by -11.27%,vline to 0%,close); }
        .bu6 { clip-path: shape(from 2.58% 0%,hline by 10.32%,vline by 100%,hline to 2.58%,vline to 75%,line by -2.58% -6.25%,vline to 31.25%,line by 2.58% -6.25%,vline to 0%,close,move to 12.9% 0%,hline by 76.77%,vline by 100%,hline to 12.9%,close,move to 100% 0%,hline by -10.32%,vline by 100%,hline by 10.32%,vline to 75%,line by -2.58% -6.25%,vline to 31.25%,line by 2.58% -6.25%,vline to 0%,close); }
        .bu7 { clip-path: shape(from 0% 0%,hline by 10.96%,vline by 100%,hline to 0%,vline to 75%,line by 2.74% -6.25%,vline to 31.25%,line by -2.74% -6.25%,vline to 0%,close,move to 10.96% 0%,hline by 75.34%,vline by 100%,hline to 10.96%,close,move to 97.26% 0%,hline by -10.96%,vline by 100%,hline by 10.96%,vline to 75%,line by 2.74% -6.25%,vline to 31.25%,line by -2.74% -6.25%,vline to 0%,close); }
      `}</style>
      <button
        onClick={onClick}
        className={cn(
          "px-6 py-2 font-bold uppercase text-sm transition-all duration-200",
          colors[color],
          shape,
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
