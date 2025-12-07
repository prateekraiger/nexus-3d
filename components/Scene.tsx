import React, { useEffect, useRef, useState, useCallback } from 'react';
import { animeData } from '../lib/animeData';
import { NEXUS_CONFIG } from '../lib/config';
import { clamp, lerp, randomRange } from '../lib/utils';
import { CardState, CameraState, Velocity } from '../types';
import Modal from './ui/Modal';
import Card from './Card';

const { grid, camera: camConfig } = NEXUS_CONFIG;

export default function Scene() {
  // DOM Refs
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Physics & State Refs (Mutable but don't trigger re-render)
  const camera = useRef<CameraState>({ ...camConfig.initial });
  const target = useRef<CameraState>({ ...camConfig.initial });
  const velocity = useRef<Velocity>({ x: 0, y: 0, z: 0 });
  const keys = useRef<{ [key: string]: boolean }>({});
  const mouse = useRef({ x: 0, y: 0, dragging: false });
  const activeHover = useRef<number | null>(null);

  // React State for UI
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    img: string | null;
    title: string | null;
    category: string | null;
    rating: number | null;
    review: string | null;
    genre: string[] | null;
  }>({
    isOpen: false,
    img: null,
    title: null,
    category: null,
    rating: null,
    review: null,
    genre: null
  });

  // Generate Card Data once
  const [cards] = useState<CardState[]>(() => {
    const items = [];
    let imgIdx = 0;

    for (let r = 0; r < grid.rows; r++) {
      for (let c = 0; c < grid.cols; c++) {
        // Deterministic pseudo-random positions
        const jitterX = 0;
        const jitterY = 0;
        const jitterZ = 0;

        const baseX = (c - (grid.cols - 1) / 2) * grid.spacing.x + jitterX;
        const baseY = (r - (grid.rows - 1) / 2) * grid.spacing.y + jitterY;
        const depthLayer = r + Math.floor(c * 0.6); // Stagger depth
        const baseZ = grid.baseDepth - depthLayer * grid.spacing.z + jitterZ;

        // Card properties
        const w = Math.min(280, Math.max(220, Math.floor(window.innerWidth * 0.22)));
        const h = Math.floor(w * 1.5);

        const anime = animeData[imgIdx % animeData.length];

        items.push({
          baseX,
          baseY,
          baseZ,
          tiltX: randomRange(-4, 4),
          tiltY: randomRange(-7, 7),
          amp: 10 + Math.random() * 10,
          spd: 0.3 + Math.random() * 0.5,
          ph: Math.random() * Math.PI * 2,
          w,
          h,
          imgSrc: anime.posterUrl,
          title: anime.title,
          category: anime.category,
          rating: anime.rating,
          review: anime.review,
          genre: anime.genre
        });
        imgIdx++;
      }
    }
    return items;
  });

  // Focus on a specific card
  const flyToCard = useCallback((index: number) => {
    if (index < 0 || index >= cards.length) return;
    const card = cards[index];
    const margin = 720;
    target.current.x = card.baseX;
    target.current.y = card.baseY;
    target.current.z = card.baseZ + margin;
    // Reset rotations slightly to look "forward"
    target.current.yaw = 0;
    target.current.pitch = -5;
  }, [cards]);

  // Main Loop
  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(1/30, (now - lastTime) / 1000);
      lastTime = now;

      // 1. Process Input -> Velocity
      const speed = keys.current['shift'] ? camConfig.speed.shiftMove : camConfig.speed.move;
      const acc = { x: 0, y: 0, z: 0 };

      const yawRad = (target.current.yaw * Math.PI) / 180;
      const forward = { x: Math.sin(yawRad), z: Math.cos(yawRad) };
      const right = { x: Math.cos(yawRad), z: -Math.sin(yawRad) };

      if (keys.current['w'] || keys.current['arrowup']) { acc.x += forward.x; acc.z += forward.z; }
      if (keys.current['s'] || keys.current['arrowdown']) { acc.x -= forward.x; acc.z -= forward.z; }
      if (keys.current['a'] || keys.current['arrowleft']) { acc.x -= right.x; acc.z -= right.z; }
      if (keys.current['d'] || keys.current['arrowright']) { acc.x += right.x; acc.z += right.z; }
      if (keys.current['q']) acc.y -= 1;
      if (keys.current['e']) acc.y += 1;

      // Normalize acceleration
      const len = Math.hypot(acc.x, acc.y, acc.z) || 1;
      if (len > 1) { acc.x /= len; acc.y /= len; acc.z /= len; }

      // Update Velocity
      velocity.current.x += acc.x * speed * dt;
      velocity.current.y += acc.y * speed * dt;
      velocity.current.z += acc.z * speed * dt;

      // Friction / Damping
      velocity.current.x *= 0.88;
      velocity.current.y *= 0.88;
      velocity.current.z *= 0.88;

      // 2. Update Target Position
      target.current.x += velocity.current.x * dt;
      target.current.y += velocity.current.y * dt;
      target.current.z += velocity.current.z * dt;
      target.current.z = clamp(target.current.z, camConfig.limits.zMin, camConfig.limits.zMax);

      // 3. Smooth Camera Follow (Lerp)
      const cam = camera.current;
      const tgt = target.current;
      const lerpFactor = 1 - Math.pow(0.03, dt * 60); // Frame-rate independent lerp
      const rotFactor = 1 - Math.pow(0.05, dt * 60);

      cam.x = lerp(cam.x, tgt.x, lerpFactor);
      cam.y = lerp(cam.y, tgt.y, lerpFactor);
      cam.z = lerp(cam.z, tgt.z, lerpFactor);
      cam.yaw = lerp(cam.yaw, tgt.yaw, rotFactor);
      cam.pitch = lerp(cam.pitch, tgt.pitch, rotFactor);

      // 4. Apply World Transform
      if (worldRef.current) {
        worldRef.current.style.transform = `
          translate3d(${-cam.x}px, ${-cam.y}px, ${-cam.z}px)
          rotateX(${cam.pitch}deg)
          rotateY(${cam.yaw}deg)
        `;
      }

      // 5. Update Cards (Floating Animation)
      const t = now / 1000;
      cards.forEach((cardState, i) => {
        const el = cardRefs.current[i];
        if (!el) return;

        const isHovered = activeHover.current === i;

        // Float calc
        const floatY = Math.sin(t * cardState.spd + cardState.ph) * cardState.amp;
        const floatX = Math.cos(t * (cardState.spd * 0.8) + cardState.ph) * (cardState.amp * 0.25);

        // Hover effects
        const lift = isHovered ? 20 : 0;
        const scale = isHovered ? 1.05 : 1;
        const rx = cardState.tiltX + (isHovered ? -5 : 0);
        const ry = cardState.tiltY + (isHovered ? 5 : 0);

        el.style.transform = `
          translate3d(${cardState.baseX + floatX}px, ${cardState.baseY + floatY - lift}px, ${cardState.baseZ}px)
          rotateX(${rx}deg)
          rotateY(${ry}deg)
          scale(${scale})
        `;
      });

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [cards]);

  // Event Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();

      // Random navigation on Space
      if (e.key === ' ') {
        flyToCard(Math.floor(Math.random() * cards.length));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      target.current.z += e.deltaY * camConfig.speed.scroll;
      target.current.z = clamp(target.current.z, camConfig.limits.zMin, camConfig.limits.zMax);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return; // Only left click
      mouse.current.dragging = true;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (viewportRef.current) viewportRef.current.setPointerCapture(e.pointerId);
    };

    const handlePointerUp = (e: PointerEvent) => {
      mouse.current.dragging = false;
      if (viewportRef.current) viewportRef.current.releasePointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!mouse.current.dragging) return;
      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      target.current.yaw -= dx * camConfig.speed.look;
      target.current.pitch -= dy * camConfig.speed.look;
      target.current.pitch = clamp(target.current.pitch, camConfig.limits.pitchMin, camConfig.limits.pitchMax);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    // Attach wheel to window to prevent default scrolling of page
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Pointer events attached to specific viewport in render

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [flyToCard]);


  return (
    <>
      <div
        ref={viewportRef}
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        style={{ perspective: '1200px', touchAction: 'none' }}
        onPointerDown={(e) => {
            mouse.current.dragging = true;
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            (e.target as Element).setPointerCapture(e.pointerId);
        }}
        onPointerUp={(e) => {
             mouse.current.dragging = false;
             (e.target as Element).releasePointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
            if (!mouse.current.dragging) return;
            const dx = e.clientX - mouse.current.x;
            const dy = e.clientY - mouse.current.y;
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            target.current.yaw -= dx * camConfig.speed.look;
            target.current.pitch -= dy * camConfig.speed.look;
            target.current.pitch = clamp(target.current.pitch, camConfig.limits.pitchMin, camConfig.limits.pitchMax);
        }}
      >
        <div
          ref={worldRef}
          className="absolute inset-0 will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {cards.map((card, i) => (
            <Card
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              card={card}
              onPointerEnter={() => activeHover.current = i}
              onPointerLeave={() => activeHover.current = null}
              onClick={(e) => {
                e.stopPropagation(); // Prevent drag start interference if needed
                if (!mouse.current.dragging) {
                    setModalState({
                      isOpen: true,
                      img: card.imgSrc,
                      title: card.title,
                      category: card.category,
                      rating: card.rating,
                      review: card.review,
                      genre: card.genre
                    });
                }
              }}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        imageSrc={modalState.img}
        title={modalState.title}
        category={modalState.category}
        rating={modalState.rating}
        review={modalState.review}
        genre={modalState.genre}
        onClose={() => setModalState(s => ({ ...s, isOpen: false }))}
      />
    </>
  );
}
