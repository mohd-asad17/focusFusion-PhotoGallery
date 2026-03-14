
export default function ErrorMessage({ message, onRetry }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="0.5" fill="#ef4444" />
          </svg>
        </div>
  
      
        <div className="text-center max-w-sm">
          <h3 className="font-display text-xl text-cream/90 mb-2">
            Something went wrong
          </h3>
          <p className="text-cream/40 text-sm leading-relaxed font-body">
            {message || 'Unable to load photos from the API. Check your connection and try again.'}
          </p>
        </div>
  
  
        {onRetry && (
          <button
            onClick={onRetry}
            className="
              px-6 py-2.5 rounded-lg font-body text-sm font-medium
              transition-all duration-200
              text-obsidian-950
            "
            style={{
              background: '#fbbf24',
              boxShadow: '0 0 20px rgba(251,191,36,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(251,191,36,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(251,191,36,0.25)' }}
          >
            Try again
          </button>
        )}
      </div>
    )
  }