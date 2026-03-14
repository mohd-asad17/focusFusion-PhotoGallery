
export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null
  
   
    const getPageNumbers = () => {
      const count = 1 
      const range = []
      const rangeWithDots = []
  
      const left = Math.max(2, currentPage - count)
      const right = Math.min(totalPages - 1, currentPage + count)
  
      range.push(1)
      for (let i = left; i <= right; i++) range.push(i)
      range.push(totalPages)
  
     
      const unique = [...new Set(range)].sort((a, b) => a - b)
  
      let prev = null
      for (const page of unique) {
        if (prev !== null) {
          if (page - prev === 2) {
            rangeWithDots.push(prev + 1)
          } else if (page - prev > 2) {
            rangeWithDots.push('...')
          }
        }
        rangeWithDots.push(page)
        prev = page
      }
  
      return rangeWithDots
    }
  
    const pages = getPageNumbers()
  
    const baseBtn = `
      relative h-9 min-w-[36px] px-2
      flex items-center justify-center
      rounded-lg font-mono text-xs tracking-wider
      transition-all duration-200
      select-none
    `
    const activeBtn = `text-obsidian-950 font-medium`
    const inactiveBtn = `text-cream/40 hover:text-cream/80 hover:bg-obsidian-700`
    const navBtn = `
      text-cream/35 hover:text-amber-400 hover:bg-obsidian-700
      disabled:opacity-20 disabled:cursor-not-allowed
      disabled:hover:bg-transparent disabled:hover:text-cream/35
    `
  
    return (
      <nav
        aria-label="Photo gallery pagination"
        className="mt-12 mb-4 flex items-center justify-center gap-1 fade-up"
      >
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${baseBtn} ${navBtn} gap-1.5 pr-3`}
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M10 12L6 8l4-4" />
          </svg>
          <span className="hidden sm:inline cursor-pointer">Prev</span>
        </button>
  
        <div className="flex items-center gap-1">
          {pages.map((page, i) =>
            page === '...' ? (
              <span
                key={`dots-${i}`}
                className="h-9 w-8 flex items-center justify-center font-mono text-xs text-cream/20"
              >
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`cursor-pointer ${baseBtn} ${page === currentPage ? activeBtn : inactiveBtn}`}
                style={
                  page === currentPage
                    ? { background: '#fbbf24', boxShadow: '0 0 16px rgba(251,191,36,0.30)' }
                    : {}
                }
              >
                {page}
              </button>
            )
          )}
        </div>
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${baseBtn} ${navBtn} gap-1.5 pl-3`}
          aria-label="Next page"
        >
          <span className="hidden sm:inline cursor-pointer">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </button>
      </nav>
    )
  }