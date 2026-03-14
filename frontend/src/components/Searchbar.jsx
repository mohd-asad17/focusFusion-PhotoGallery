export default function SearchBar({ value, onChange, resultCount, totalCount }) {
    return (
      <div className="w-full max-w-xl mx-auto">
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200 group-focus-within:text-amber-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-cream/30 group-focus-within:text-amber-400 transition-colors duration-200"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
   
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search by photographer…"
            className="
              search-input
              w-full pl-11 pr-12 py-3.5
              rounded-xl
              bg-obsidian-800 text-cream
              border border-obsidian-600
              placeholder-cream/20
              font-body text-sm
              outline-none
              transition-all duration-200
              hover:border-obsidian-600/80
              focus:border-amber-400/50
            "
            style={{ caretColor: '#fbbf24' }}
          />
   
          {value && (
            <button
              onClick={() => onChange({ target: { value: '' } })}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                w-6 h-6 rounded-full
                flex items-center justify-center
                text-cream/30 hover:text-cream/70
                hover:bg-obsidian-700
                transition-all duration-150
              "
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3 h-3">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
   
        <div className="mt-2.5 text-center h-4">
          {value && (
            <p className="font-mono text-xs tracking-widest text-cream/25 uppercase fade-in">
              {resultCount === 0
                ? 'No matches found'
                : `${resultCount} of ${totalCount} photos`}
            </p>
          )}
        </div>
      </div>
    )
  }