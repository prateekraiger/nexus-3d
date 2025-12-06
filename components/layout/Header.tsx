import React from 'react';
import { IconBox, IconMouse, IconMove } from '../ui/Icons';
import { NEXUS_CONFIG } from '../../lib/config';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg">
            <IconBox className="text-nexus-accent" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">{NEXUS_CONFIG.meta.title}</h1>
            <p className="text-xs text-white/50">{NEXUS_CONFIG.meta.subtitle}</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-white/70 flex items-center gap-2">
            <IconMouse className="w-4 h-4" />
            Drag to Look
          </div>
          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-white/70 flex items-center gap-2">
            <IconMove className="w-4 h-4" />
            WASD to Move
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
