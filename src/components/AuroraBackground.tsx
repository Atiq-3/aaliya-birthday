export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 10%, #2d1b3d 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, #3d1b2d 0%, transparent 55%),
            radial-gradient(ellipse at 50% 100%, #1a0f2e 0%, transparent 60%),
            linear-gradient(180deg, #0a0518 0%, #150a20 50%, #0a0518 100%)
          `,
        }}
      />

      {/* Aurora layer 1 */}
      <div
        className="absolute -inset-[30%] opacity-60 animate-[aurora_25s_ease-in-out_infinite]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 25% 30%, rgba(244,114,182,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 50% 35% at 75% 60%, rgba(168,85,247,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 50% 80%, rgba(139,92,246,0.25) 0%, transparent 65%)
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Aurora layer 2 */}
      <div
        className="absolute -inset-[30%] opacity-40 animate-[aurora2_30s_ease-in-out_infinite]"
        style={{
          background: `
            radial-gradient(ellipse 55% 40% at 80% 20%, rgba(236,72,153,0.4) 0%, transparent 55%),
            radial-gradient(ellipse 60% 45% at 20% 70%, rgba(192,132,252,0.35) 0%, transparent 60%)
          `,
          filter: 'blur(80px)',
        }}
      />

      {/* Stars */}
      <div
        className="absolute inset-0 opacity-40 animate-[twinkle_4s_ease-in-out_infinite]"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1.5px 1.5px at 40% 15%, white, transparent),
            radial-gradient(1px 1px at 80% 40%, white, transparent),
            radial-gradient(1px 1px at 10% 80%, white, transparent),
            radial-gradient(1.5px 1.5px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 30% 90%, white, transparent),
            radial-gradient(1px 1px at 70% 10%, white, transparent),
            radial-gradient(1.5px 1.5px at 15% 55%, white, transparent),
            radial-gradient(1px 1px at 85% 85%, white, transparent),
            radial-gradient(1px 1px at 45% 25%, white, transparent)
          `,
        }}
      />

      <style>{`
        @keyframes aurora {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          33% { transform: translate(5%, -3%) rotate(3deg) scale(1.05); }
          66% { transform: translate(-4%, 4%) rotate(-2deg) scale(0.98); }
        }
        @keyframes aurora2 {
          0%, 100% { transform: translate(0%, 0%) rotate(0deg) scale(1.05); }
          50% { transform: translate(-6%, 5%) rotate(-4deg) scale(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.55; }
        }
      `}</style>
    </div>
  );
}