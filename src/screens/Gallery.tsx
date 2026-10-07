import { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  caption: string;
  date?: string;
};

const media: MediaItem[] = [
  { type: 'image', src: '/photos/1.jpeg', caption: 'That smile I fell for', date: 'March 14' },
  { type: 'image', src: '/photos/2.jpeg', caption: 'Golden hour, golden you' },
  { type: 'video', src: '/videos/1.mp4', caption: 'A moment I saved forever' },
  { type: 'image', src: '/photos/3.jpeg', caption: 'My favorite kind of magic' },
  { type: 'image', src: '/photos/4.jpeg', caption: 'Simply unforgettable' },
  { type: 'video', src: '/videos/2.mp4', caption: 'You, being you' },
  { type: 'image', src: '/photos/5.jpeg', caption: 'Every picture tells a story' },
  { type: 'image', src: '/photos/6.jpeg', caption: 'My favorite person' },
  { type: 'video', src: '/videos/3.mp4', caption: 'Pure joy' },
  { type: 'video', src: '/videos/4.mp4', caption: 'Forever in my heart' },
];

export default function Gallery({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);
  const item = media[index];

  useEffect(() => {
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % media.length);
    }, 5000);
    return () => clearTimeout(t);
  }, [index]);

  const goPrev = () => setIndex((i) => (i - 1 + media.length) % media.length);
  const goNext = () => setIndex((i) => (i + 1) % media.length);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <p className="text-[0.65rem] sm:text-xs tracking-[0.5em] text-white/40 uppercase mb-3 opacity-0 animate-[fadeUp_1s_0.2s_forwards]">
        Chapter I — Memories
      </p>
      <h2 className="font-serif italic font-light text-4xl sm:text-6xl md:text-7xl text-white/90 mb-8 sm:mb-12 text-center opacity-0 animate-[fadeUp_1s_0.4s_forwards]">
        Beautiful{' '}
        <span className="bg-gradient-to-r from-rose to-lilac bg-clip-text text-transparent">
          You
        </span>
      </h2>

      {/* Media Frame */}
      <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(244,114,182,0.25)] bg-white/5 backdrop-blur-sm">
        {/* Progress bar */}
        <ProgressBar current={index} total={media.length} duration={5000} />

        {/* Media */}
        {item.type === 'image' ? (
          <img
            key={index}
            src={item.src}
            alt=""
            className="w-full h-full object-cover animate-[kenBurns_6s_ease-out_forwards]"
          />
        ) : (
          <video
            key={index}
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover animate-[kenBurns_6s_ease-out_forwards]"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent pointer-events-none" />

        {/* Date badge */}
        {item.date && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
            <span className="text-white/90 text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase">
              {item.date}
            </span>
          </div>
        )}

        {/* Caption */}
        <p
          key={`cap-${index}`}
          className="absolute bottom-8 left-6 right-6 font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/95 text-center opacity-0 animate-[fadeUp_1s_0.5s_forwards] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          {item.caption}
        </p>

        {/* Tap zones (invisible) */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
        />
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer"
        />
      </div>

      {/* Dots */}
      <div className="flex gap-1.5 sm:gap-2 mt-8 sm:mt-10 flex-wrap justify-center max-w-md">
        {media.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-rose' : 'w-4 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Continue */}
      <button
        onClick={onNext}
        className="group relative mt-10 sm:mt-12 px-10 sm:px-12 py-4 rounded-full border border-white/25 text-white/90 text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-transparent hover:text-ink hover:tracking-[0.5em]"
      >
        <span className="relative z-10">Continue →</span>
        <span className="absolute inset-0 bg-gradient-to-br from-rose to-lilac opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenBurns {
          from { transform: scale(1) translate(0, 0); }
          to { transform: scale(1.12) translate(-1%, -1%); }
        }
      `}</style>
    </main>
  );
}