export default function ProgressBar({
  current,
  total,
  duration = 5000,
}: {
  current: number;
  total: number;
  duration?: number;
}) {
  return (
    <div className="absolute top-4 left-4 right-4 flex gap-1.5 z-30">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-[2.5px] bg-white/20 rounded-full overflow-hidden"
        >
          <div
            className={`h-full bg-white rounded-full ${
              i < current
                ? 'w-full'
                : i === current
                ? 'animate-[progress_linear_forwards]'
                : 'w-0'
            }`}
            style={{
              animationDuration: i === current ? `${duration}ms` : '0ms',
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}