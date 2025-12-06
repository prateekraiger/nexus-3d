import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CardState } from '../types';
import { IconExpand } from './ui/Icons';

interface CardProps {
  card: CardState;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ card, onPointerEnter, onPointerLeave, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute group rounded-xl bg-neutral-900/40 backdrop-blur-md ring-1 ring-white/10 shadow-2xl cursor-pointer"
      style={{
        width: card.w,
        height: card.h,
        transformStyle: 'preserve-3d',
        transform: `translate3d(${card.baseX}px, ${card.baseY}px, ${card.baseZ}px)`
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <LazyLoadImage
          src={card.imgSrc}
          alt="Card"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          effect="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/90 truncate mr-2">{card.title}</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
              <IconExpand className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
