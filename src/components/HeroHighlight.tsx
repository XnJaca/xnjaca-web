import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Props {
  word: string;
}

export default function HeroHighlight({ word }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 220, damping: 32, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 220, damping: 32, mass: 0.4 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.06;
      const dy = (e.clientY - cy) * 0.06;
      mouseX.set(Math.max(-14, Math.min(14, dx)));
      mouseY.set(Math.max(-8, Math.min(8, dy)));
    }
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const rotate = useTransform(x, [-14, 14], [-1.2, 1.2]);

  return (
    <motion.span
      ref={ref}
      style={{
        display: 'inline-block',
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-bg)',
        padding: '0 0.12em 0.06em',
        borderRadius: '8px',
        x,
        y,
        rotate,
        willChange: 'transform',
      }}
    >
      {word}
    </motion.span>
  );
}
