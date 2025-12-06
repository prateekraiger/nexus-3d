import React from 'react';
import { IconZoom } from '../ui/Icons';
import Button from '../ui/Button';
import Kbd from '../ui/Kbd';

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <Kbd>W</Kbd>
              <Kbd>A</Kbd>
              <Kbd>S</Kbd>
              <Kbd>D</Kbd>
            </div>
            <span className="text-xs text-white/50">Navigate</span>
          </div>

          <div className="w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <IconZoom className="w-4 h-4 text-white/50" />
            <span className="text-xs text-white/50">Scroll to Zoom</span>
          </div>
          
          <div className="w-px h-8 bg-white/10 hidden sm:block" />

          <Button
            className="hidden sm:flex"
            onClick={() => window.location.reload()}
          >
            Reset Camera
          </Button>
        </div>
      </div>
      
      {/* Mobile overlay warning (optional, but good UX for complex 3D) */}
      <div className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 pointer-events-none text-center w-full px-4">
        <p className="text-[10px] text-white/30 uppercase tracking-widest">Best experienced on Desktop</p>
      </div>
    </>
  );
};

export default Footer;
