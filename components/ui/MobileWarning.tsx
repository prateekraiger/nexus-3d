import React, { useState } from 'react';
import { IconDeviceDesktop } from './Icons';

const MobileWarning: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden bg-neutral-950 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 mb-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
        <IconDeviceDesktop className="w-8 h-8 text-blue-400" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">Desktop Optimized</h2>
      <p className="text-white/60 max-w-xs leading-relaxed mb-8">
        This immersive 3D experience is designed for larger screens. Please visit us on a desktop or laptop for the best view.
      </p>

      <button
        onClick={() => setDismissed(true)}
        className="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
      >
        Visit Anyway
      </button>

      <div className="mt-8 text-xs text-white/30 uppercase tracking-widest">
        Nexus 3D Space
      </div>
    </div>
  );
};

export default MobileWarning;
