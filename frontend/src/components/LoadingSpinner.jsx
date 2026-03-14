
export default function LoadingSpinner({ currentPage = 1 }) {

    const isFirstLoad = currentPage === 1
  
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="relative w-14 h-14">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#fbbf24', animation: 'spin 1.1s linear infinite' }}
          />
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent"
            style={{ borderBottomColor: '#fbbf2480', animation: 'spin 0.7s linear infinite reverse' }}
          />
          <div className="absolute inset-[22px] rounded-full bg-amber-400 opacity-80" />
        </div>
  
        <div className="text-center">
          <p
            className="font-display text-lg text-cream/60 italic"
            style={{ letterSpacing: '0.05em' }}
          >
            {isFirstLoad ? 'Developing the negatives…' : `Loading page ${currentPage}…`}
          </p>
          <p className="font-mono text-xs text-cream/30 mt-1 tracking-widest uppercase">
            Fetching 30 photos
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl px-6 mt-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skeleton aspect-4/3 rounded-xl" />
              <div className="mt-3 px-1 space-y-2">
                <div className="skeleton h-3 rounded-full w-3/4" />
                <div className="skeleton h-2 rounded-full w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }