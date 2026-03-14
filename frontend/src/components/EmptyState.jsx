export default function EmptyState({ query }) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 fade-in">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-cream/20"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-display text-lg text-cream/40 italic">
            No photographers found
          </p>
          <p className="font-body text-sm text-cream/25 mt-1">
            No results for <span className="text-cream/40">&ldquo;{query}&rdquo;</span>
          </p>
        </div>
      </div>
    )
  }