import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function Finale({ onRestart }: { onRestart: () => void }) {
  const [revealMessage, setRevealMessage] = useState(false);

  useEffect(() => {
    const duration = 5000;
    const end = Date.now() + duration;
    const colors = ['#fecdd3', '#f472b6', '#c084fc', '#fcd34d', '#ffffff'];

    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      requestAnimationFrame(frame);
    };
    frame();

    setTimeout(() => {
      confetti({
        particleCount: 250,
        spread: 130,
        origin: { y: 0.6 },
        colors,
        scalar: 1.2,
      });
    }, 400);

    setTimeout(() => setRevealMessage(true), 1200);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="font-serif italic font-light text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] bg-gradient-to-br from-blush via-rose to-lilac bg-clip-text text-transparent bg-[length:200%_200%] animate-shimmer mb-3 sm:mb-5 drop-shadow-[0_0_60px_rgba(244,114,182,0.4)] opacity-0 animate-[fadeUp_1.4s_0.3s_forwards]">
        Happy Birthday
      </h1>

      <h2 className="font-script text-[clamp(3.5rem,14vw,9rem)] text-white/95 mb-10 sm:mb-14 drop-shadow-[0_0_40px_rgba(244,114,182,0.35)] opacity-0 animate-[fadeUp_1.4s_0.7s_forwards]">
        Aaliya
      </h2>

      {revealMessage && (
        <div className="max-w-2xl backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-10 mb-10 sm:mb-12 text-left">
          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_0.3s_forwards]">
            Aaj aapka birthday hai, aur main bahot khush hoon 🥹💖
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_0.6s_forwards]">
            Main apni life mein isse zyada khush kabhi nahi hua.
            <br />
            Aaliya — my sunflower 🌻
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_0.9s_forwards]">
            I know aap kehte ho "mat wait karo"…
            <br />
            par main kya karun, mujhse nahi hota. 💔
            <br />
            <span className="text-rose">I can't stop loving you.</span>
            <br />
            Aapko bhi pata hai.
            <br />
            Main fake nahi kar sakta.
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_1.2s_forwards]">
            Aap meri life ka sabse best part ho —
            <br />
            aur sabse sundar bhi 🌸
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_1.5s_forwards]">
            Aaj main bahot khush hoon. Happy Birthday, my lily flower 🌷
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_1.8s_forwards]">
            Aab main mila nahi, na kuch gift de sakta hoon…
            <br />
            Par as a coder, yahi bhej sakta hoon aapko 💻💖
            <br />
            Address bhi nahi diya, warna cake bhej deta 🎂
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_2.1s_forwards]">
            So — ye bana diya. Sirf aapke liye.
          </p>

          <p className="font-light text-white/90 text-lg sm:text-xl leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_2.4s_forwards]">
            <span className="text-rose font-medium">I love you sooooo much 💕</span>
            <br />
            Happy Happy Birthday to you 🎉
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_2.7s_forwards]">
            Sachi, bahot naseeb wala hoon jo main aapka wait kar raha hoon.
            <br />
            Aap ho hi sabse special aur beautiful person for me ✨
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_3s_forwards]">
            Aap humesha khush raho. Kuch bhi ho —
            <br />
            main humesha hoon. You know that, na? 🤍
          </p>

          <p className="font-light text-white/80 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_3.3s_forwards]">
            Aur main wait karta rahunga…
            <br />
            hamesha. Jab tak ho. 🤍
          </p>

          <p className="font-light text-white/90 text-base sm:text-lg leading-relaxed mb-5 opacity-0 animate-[fadeUp_1s_3.6s_forwards]">
            I really love you.
            <br />
            And I will make you know that. 💖
          </p>

          <p className="font-script text-4xl sm:text-5xl text-rose mt-8 text-center opacity-0 animate-[fadeUp_1s_4s_forwards]">
            Happy Birthday, Aaluuuuuuuuuuu 🎂💖🎉
          </p>

          <p className="font-serif italic text-white/60 text-center mt-6 text-base sm:text-lg opacity-0 animate-[fadeUp_1s_4.3s_forwards]">
            — With all my heart 🤍
          </p>
        </div>
      )}

      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        <button
          onClick={() => {
            confetti({
              particleCount: 300,
              spread: 160,
              origin: { y: 0.5 },
              scalar: 1.3,
            });
          }}
          className="px-6 sm:px-8 py-4 rounded-full bg-gradient-to-br from-rose to-lilac text-ink font-medium text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase hover:scale-105 transition-transform shadow-[0_10px_40px_rgba(244,114,182,0.4)]"
        >
          🎉 More Magic
        </button>
        <button
          onClick={onRestart}
          className="px-6 sm:px-8 py-4 rounded-full border border-white/25 text-white/90 text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase hover:bg-white/5 hover:scale-105 transition-all"
        >
          ↻ Replay
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}