import MarchBadge from '../components/MarchBadge';

export default function Intro({ onNext }: { onNext: () => void }) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Small floating heart */}
      <div className="text-3xl sm:text-4xl mb-6 animate-float opacity-0 animate-[fadeUp_1s_0.2s_forwards]">
        💖
      </div>

      {/* March 14 badge */}
      <MarchBadge />

      {/* Eyebrow */}
      <p className="text-[0.65rem] sm:text-xs tracking-[0.5em] text-white/40 uppercase mb-6 opacity-0 animate-[fadeUp_1.2s_0.6s_forwards]">
        A Cinematic Experience
      </p>

      {/* Her name */}
      <h1 className="font-script italic font-light text-[clamp(4rem,18vw,11rem)] leading-[0.9] bg-gradient-to-br from-blush via-rose to-lilac bg-clip-text text-transparent bg-[length:200%_200%] animate-shimmer drop-shadow-[0_0_60px_rgba(244,114,182,0.35)] opacity-0 animate-[fadeUp_1.4s_0.9s_forwards] mb-6">
        Aaliya
      </h1>

      {/* Divider */}
      <div className="mx-auto my-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-0 animate-[expandLine_1.5s_1.6s_forwards]" />

      {/* Subtitles */}
      <p className="font-serif italic text-white/60 text-base sm:text-lg md:text-xl mb-4 max-w-lg opacity-0 animate-[fadeUp_1.2s_2s_forwards]">
        On March 14, our first conversation began.
      </p>
      <p className="font-serif italic text-white/75 text-base sm:text-lg md:text-xl mb-12 max-w-lg opacity-0 animate-[fadeUp_1.2s_2.3s_forwards]">
        And today — your birthday. 🎂
      </p>

      {/* Button */}
      <button
        onClick={onNext}
        className="group relative px-10 sm:px-14 py-4 rounded-full border border-white/25 text-white/90 text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-transparent hover:text-ink hover:tracking-[0.5em] hover:shadow-[0_20px_40px_rgba(244,114,182,0.3)] opacity-0 animate-[fadeUp_1.2s_2.7s_forwards]"
      >
        <span className="relative z-10">Begin the Journey</span>
        <span className="absolute inset-0 bg-gradient-to-br from-rose to-lilac opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      <p className="mt-10 text-white/25 text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase opacity-0 animate-[fadeUp_1s_3s_forwards]">
        made only for you
      </p>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          to { width: 200px; }
        }
      `}</style>
    </main>
  );
}