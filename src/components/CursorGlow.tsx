import { useEffect, useRef, CSSProperties } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });
  const prev = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);
  const rafId = useRef<number>(0);
  const visible = useRef(false);

  useEffect(() => {
    const show = () => {
      if (!visible.current) {
        dotRef.current && (dotRef.current.style.opacity = '1');
        ringRef.current && (ringRef.current.style.opacity = '1');
        glowRef.current && (glowRef.current.style.opacity = '1');
        visible.current = true;
      }
    };

    const hide = () => {
      dotRef.current && (dotRef.current.style.opacity = '0');
      ringRef.current && (ringRef.current.style.opacity = '0');
      glowRef.current && (glowRef.current.style.opacity = '0');
      visible.current = false;
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      show();
    };

    const onClick = () => {
      // pulse ring on click
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.8)';
        ringRef.current.style.opacity = '0.3';
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
            ringRef.current.style.opacity = '1';
          }
        }, 300);
      }
    };

    const animate = () => {
      // dot: instant
      dot.current.x += (target.current.x - dot.current.x) * 0.9;
      dot.current.y += (target.current.y - dot.current.y) * 0.9;

      // ring: medium lag
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;

      // glow: heavy lag
      glow.current.x += (target.current.x - glow.current.x) * 0.07;
      glow.current.y += (target.current.y - glow.current.y) * 0.07;

      // velocity for color shift
      const dx = dot.current.x - prev.current.x;
      const dy = dot.current.y - prev.current.y;
      velocity.current = Math.min(Math.sqrt(dx * dx + dy * dy), 30) / 30;
      prev.current = { x: dot.current.x, y: dot.current.y };

      // interpolate orange → blue based on speed
      const r = Math.round(255 * (1 - velocity.current) + 56 * velocity.current);
      const g = Math.round(153 * (1 - velocity.current) + 189 * velocity.current);
      const b = Math.round(0 * (1 - velocity.current) + 248 * velocity.current);
      const color = `rgb(${r},${g},${b})`;

      if (dotRef.current) {
        dotRef.current.style.left = `${dot.current.x}px`;
        dotRef.current.style.top = `${dot.current.y}px`;
        dotRef.current.style.background = color;
        dotRef.current.style.boxShadow = `0 0 8px 2px ${color}`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
        ringRef.current.style.borderColor = color;
        ringRef.current.style.boxShadow = `0 0 12px 1px ${color}40`;
      }

      if (glowRef.current) {
        glowRef.current.style.left = `${glow.current.x}px`;
        glowRef.current.style.top = `${glow.current.y}px`;
        glowRef.current.style.background = `radial-gradient(circle, rgba(${r},${g},${b},0.13) 0%, rgba(${r},${g},${b},0.05) 45%, transparent 70%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);
    document.addEventListener('click', onClick);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const base: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 0,
    transform: 'translate(-50%, -50%)',
    willChange: 'left, top',
    transition: 'opacity 0.4s ease',
  };

  return (
    <>
      {/* Sharp dot */}
      <div ref={dotRef} aria-hidden="true" style={{
        ...base,
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'rgb(255,153,0)',
        boxShadow: '0 0 8px 2px rgb(255,153,0)',
      }} />

      {/* Lagging ring */}
      <div ref={ringRef} aria-hidden="true" style={{
        ...base,
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1.5px solid rgb(255,153,0)',
        boxShadow: '0 0 12px 1px rgba(255,153,0,0.25)',
        transition: 'opacity 0.4s ease, transform 0.3s ease',
      }} />

      {/* Ambient glow */}
      <div ref={glowRef} aria-hidden="true" style={{
        ...base,
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        mixBlendMode: 'screen',
        background: 'radial-gradient(circle, rgba(255,153,0,0.13) 0%, rgba(255,153,0,0.05) 45%, transparent 70%)',
      }} />
    </>
  );
}
