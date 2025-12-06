import React from 'react';
import { cn } from '../../lib/utils';

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

const Kbd: React.FC<KbdProps> = ({ children, className }) => {
  return (
    <kbd
      className={cn(
        'w-6 h-6 rounded flex items-center justify-center bg-white/10 border border-white/10 text-[10px] font-mono',
        className
      )}
    >
      {children}
    </kbd>
  );
};

export default Kbd;
