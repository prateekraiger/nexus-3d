import React from 'react';
import Scene from './components/Scene';
import { IconBox, IconMouse, IconMove, IconZoom } from './components/ui/Icons';
import { NEXUS_CONFIG } from './lib/config';

export default function App() {
  return (
    <div className="relative w-full h-screen bg-neutral-950 overflow-hidden text-white selection:bg-nexus-accent/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        {/* Grid lines overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      {/* Main 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Header UI */}
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

      {/* Bottom UI Controls */}
      <div className="fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl flex items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="flex gap-1">
               <kbd className="w-6 h-6 rounded flex items-center justify-center bg-white/10 border border-white/10 text-[10px] font-mono">W</kbd>
               <kbd className="w-6 h-6 rounded flex items-center justify-center bg-white/10 border border-white/10 text-[10px] font-mono">A</kbd>
               <kbd className="w-6 h-6 rounded flex items-center justify-center bg-white/10 border border-white/10 text-[10px] font-mono">S</kbd>
               <kbd className="w-6 h-6 rounded flex items-center justify-center bg-white/10 border border-white/10 text-[10px] font-mono">D</kbd>
             </div>
             <span className="text-xs text-white/50">Navigate</span>
          </div>

          <div className="w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
             <IconZoom className="w-4 h-4 text-white/50" />
             <span className="text-xs text-white/50">Scroll to Zoom</span>
          </div>
          
          <div className="w-px h-8 bg-white/10 hidden sm:block" />

          <button 
            className="hidden sm:flex px-4 py-1.5 rounded-lg bg-nexus-accent/20 hover:bg-nexus-accent/30 text-nexus-accent border border-nexus-accent/20 text-xs font-semibold transition-colors"
            onClick={() => window.location.reload()}
          >
            Reset Camera
          </button>
        </div>
      </div>
      
      {/* Mobile overlay warning (optional, but good UX for complex 3D) */}
      <div className="md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 pointer-events-none text-center w-full px-4">
        <p className="text-[10px] text-white/30 uppercase tracking-widest">Best experienced on Desktop</p>
      </div>

    </div>
  );
}