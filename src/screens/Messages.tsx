import { useState, useEffect } from 'react';

const messages = [
  {
    emoji: '🌻',
    title: 'Every Fourteenth',
    text: "Every 14th day I write to you, because you deserve to be reminded how rare you are. You don't need a reason to be celebrated — you just are.",
    date: 'March 14',
  },
  {
    emoji: '💫',
    title: 'Your Smile',
    text: "Your smile has a quiet magic. It turns my worst days into something I can survive. I don't think you realize how much light you carry.",
  },
  {
    emoji: '🌸',
    title: 'Your Kindness',
    text: "The way you care, the way you listen... people like you don't come around twice. I noticed that the first time we spoke.",
  },
  {
    emoji: '💌',
    title: 'Just So You Know',
    text: "You may never feel the same way — and that's okay. Seeing you happy, even from a distance, is enough for me. It always will be.",
  },
  {
    emoji: '🎂',
    title: 'And Today',
    text: 'Today is yours. The whole universe should pause and celebrate you. And I do — every single day, in every quiet moment.',
  },
];

export default function Messages({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const message = messages[index];
  const isLast = index === messages.length - 1;

  // Typewriter effect
  useEffect(() => {
    setTypedText('');
    let i = 0;
    const text = message.text;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setTypedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [index, message.text]);

  const handleNext = () => {
    if (isLast) {
      onNext();
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Progress dots */}
      <div className="flex gap-2 mb-12">
        {messages.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-10 bg-rose' : 'w-1.5 bg-white/25'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-[0.65rem] sm:text-xs tracking-[0.5em] text-white/40 uppercase mb-4">
        Message {String(index + 1).padStart(2, '0')} / {String(messages.length).padStart(2, '0')}
      </p>

      {/* Card */}
      <div
        key={index}
        className="max-w-2xl w-full backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-12 animate-[popIn_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
      >
        {/* Emoji */}
        <div className="text-5xl sm:text-6xl mb-6 animate-float">
          {message.emoji}
        </div>

        {/* Date badge */}
        {message.date && (
          <div className="inline-block px-4 py-1.5 rounded-full bg-rose/10 border border-rose/30 mb-6">
            <span className="text-rose/90 text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase">
              {message.date}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="font-serif italic font-light text-3xl sm:text-4xl md:text-5xl text-white/95 mb-6">
          {message.title}
        </h2>

        {/* Divider */}
        <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-rose to-transparent mb-6" />

        {/* Typewriter text */}
        <p className="font-light text-white/75 text-base sm:text-lg md:text-xl leading-relaxed min-h-[100px]">
          {typedText}
          <span className="inline-block w-[2px] h-5 bg-rose ml-1 animate-pulse" />
        </p>
      </div>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="group relative mt-12 px-10 sm:px-12 py-4 rounded-full border border-white/25 text-white/90 text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-transparent hover:text-ink hover:tracking-[0.5em]"
      >
        <span className="relative z-10">
          {isLast ? 'One Last Thing 💌' : 'Next Message →'}
        </span>
        <span className="absolute inset-0 bg-gradient-to-br from-rose to-lilac opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      {/* Skip hint */}
      <button
        onClick={handleNext}
        className="mt-6 text-white/30 text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase hover:text-white/60 transition-colors"
      >
        skip
      </button>

      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.92) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}