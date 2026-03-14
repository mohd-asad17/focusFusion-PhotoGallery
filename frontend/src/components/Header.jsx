export default function Header({ favouriteCount }) {
    return (
      <header
        className="sticky top-0 z-50 px-6 py-4"
        style={{
          background: 'rgba(10,10,11,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
            >
              <span className="text-amber-400 text-xs">✦</span>
            </div>
            <div>
              <h1 className="font-display text-lg leading-none" style={{ letterSpacing: '-0.01em' }}>
                <span className="text-cream/90">focus</span>
                <span className="text-amber-400 italic">Fusion</span>
              </h1>
              <p className="font-mono text-[9px] text-cream/25 tracking-[0.2em] uppercase mt-0.5">
                Photo Gallery
              </p>
            </div>
          </div>
   
          {favouriteCount > 0 && (
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full fade-in"
              style={{
                background: 'rgba(251,191,36,0.08)',
                border: '1px solid rgba(251,191,36,0.2)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fbbf24"
                className="w-3.5 h-3.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="font-mono text-[11px] text-amber-400 tracking-wider">
                {favouriteCount} saved
              </span>
            </div>
          )}
        </div>
      </header>
    )
  }