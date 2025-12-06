import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'px-4 py-1.5 rounded-lg bg-nexus-accent/20 hover:bg-nexus-accent/30 text-nexus-accent border border-nexus-accent/20 text-xs font-semibold transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
