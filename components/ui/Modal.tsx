import React, { useEffect, useState } from 'react';
import { IconX } from './Icons';
import { cn } from '../../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  title: string | null;
  category: string | null;
  rating: number | null;
  review: string | null;
  genre: string[] | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, title, category, rating, review, genre }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setIsVisible(true);
      // Small delay to allow display:block to apply before opacity transition
      requestAnimationFrame(() => {
        setIsFlipped(true);
      });
      document.body.style.overflow = 'hidden';
    } else {
      setIsFlipped(false);
      timeout = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
      }, 500); // Wait for flip back
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* 3D Container */}
      <div
        className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video z-10"
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)' // Entry animation
          }}
        >
          {/* Content */}
          <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">
             <div className="relative h-2/3 md:h-full md:w-2/3 bg-black">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={title || "Project"}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
             </div>

             <div className="h-1/3 md:h-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-neutral-900 overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{category || "Anime"}</span>
                    {rating && (
                        <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded text-yellow-500 text-xs font-bold">
                            <span>★</span> {rating}
                        </div>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

                  {review && (
                      <p className="text-white/70 leading-relaxed text-sm md:text-base mb-6">
                        {review}
                      </p>
                  )}

                  {genre && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {genre.map((g, i) => (
                            <span key={i} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/60">
                                {g}
                            </span>
                        ))}
                      </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-6 md:mt-0 pt-4 border-t border-white/5">
                  <button className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors">
                    Watch Now
                  </button>
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                  >
                    Close <IconX className="w-4 h-4" />
                  </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
