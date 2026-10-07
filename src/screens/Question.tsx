import { useState } from 'react';

const NO_TEXTS = [
  'No',
  'Are you sure?',
  'Really?',
  'Think again!',
  'Last chance!',
  'Okay... only Yes now 💖',
];

export default function Question({ onYes }: { onYes: () => void }) {
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const [noText, setNoText] = useState(NO_TEXTS[0]);
  const [noScale, setNoScale] = useState(1);
  const [noEscapes, setNoEscapes] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noHidden, setNoHidden] = useState(false);

  const escapeNo = () => {
    if (yesClicked || noHidden) return;
    const nextEscape = noEscapes + 1;
    setNoEscapes(nextEscape);
    setNoText(NO_TEXTS[Math.min(nextEscape, NO_TEXTS.length - 1)]);
    const newScale = Math.max(1 - nextEscape * 0.15, 0.25);
    setNoScale(newScale);
    const rangeX = 260;
    const rangeY = 180;
    const newX = (Math.random() - 0.5) * rangeX;
    const newY = (Math.random() - 0.5) * rangeY;
    setNoOffset({ x: newX, y: newY });
    if (nextEscape >= 5) {
      setTimeout(() => setNoHidden(true), 400);
    }
  };

  const handleYes = () => {
    setYesClicked(true);
    setTimeout(() => onYes(), 2200);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div className="text-4xl mb-8 animate-pulse-slow opacity-0 animate-[fadeUp_1s_0.2s_forwards]">
        💖
      </div>

      <p className="text-[0.65rem] sm:text-xs tracking-[0.5em] text-white/40 uppercase mb-6 opacity-0 animate-[fadeUp_1s_0.4s_forwards]">
        A Question For You
      </p>

      <h1 className="font-serif italic font-light text-[clamp(2.2rem,8vw,5rem)] leading-[1.1] text-center text-white/95 mb-4 opacity-0 animate-[fadeUp_1.2s_0.6s_forwards]">
        Will you{' '}
        <span className="bg-gradient-to-r from-rose to-lilac bg-clip-text text-transparent">
          meet me
        </span>
        ?
      </h1>

      <p className="font-serif italic text-white/50 text-base sm:text-lg mb-14 text-center max-w-md opacity-0 animate-[fadeUp_1.2s_0.9s_forwards]">
        There's only one right answer here…
      </p>

      <div className="relative flex items-center justify-center gap-6 sm:gap-10 min-h-[120px] w-full max-w-lg opacity-0 animate-[fadeUp_1.2s_1.3s_forwards]">
        <button
          onClick={handleYes}
          disabled={yesClicked}
          className="group relative px-10 sm:px-14 py-5 rounded-full bg-gradient-to-br from-rose to-lilac text-ink font-semibold text-sm sm:text-base tracking-[0.2em] uppercase shadow-[0_20px_50px_rgba(244,114,182,0.5)] hover:scale-110 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(244,114,182,0.7)] disabled:opacity-90 disabled:scale-125 disabled:shadow-[0_30px_80px_rgba(244,114,182,0.9)]"
        >
          <span className="relative z-10 flex items-center gap-2">Yes 💖</span>
          {!yesClicked && (
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          )}
        </button>

        {!noHidden && (
          <button
            onMouseEnter={escapeNo}
            onTouchStart={(e) => {
              e.preventDefault();
              escapeNo();
            }}
            onClick={(e) => {
              e.preventDefault();
              escapeNo();
            }}
            style={{
              transform: `translate(${noOffset.x}px, ${noOffset.y}px) scale(${noScale})`,
              transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            className="px-8 sm:px-10 py-4 rounded-full border border-white/25 text-white/70 text-sm sm:text-base tracking-[0.15em] uppercase backdrop-blur-md cursor-pointer select-none whitespace-nowrap"
          >
            {noText}
          </button>
        )}
      </div>

      {yesClicked && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="text-center animate-[popIn_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]">
            <p className="font-script text-6xl sm:text-8xl md:text-9xl text-white drop-shadow-[0_0_60px_rgba(244,114,182,0.8)]">
              Yay!
            </p>
            <p className="font-serif italic text-white/80 text-lg sm:text-2xl mt-4">
              I knew it 💖
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          60% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}