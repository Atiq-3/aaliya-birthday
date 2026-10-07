import { useMemo } from 'react';

const GLYPHS = ['✨', '🌸', '💫', '🌷', '·', '✿', '❀', '🌺'];

export default function FloatingParticles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        duration: 12 + Math.random() * 15,
        delay: Math.random() * 15,
        size: 0.6 + Math.random() * 1.2,
        glyph: GLYPHS[i % GLYPHS.length],
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none -z-[5] overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            color: 'rgba(255, 230, 240, 0.9)',
            textShadow: '0 0 12px rgba(244, 114, 182, 0.6)',
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
            opacity: p.opacity,
          }}
        >
          {p.glyph}
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(105vh) translateX(0) rotate(0deg); opacity: 0; }
          10%, 90% { opacity: 0.6; }
          50% { transform: translateY(50vh) translateX(30px) rotate(180deg); }
          100% { transform: translateY(-10vh) translateX(-30px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}