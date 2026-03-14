import { useState } from "react"

export default function PhotoCard({ photo, isFavourited, onToggleFavourite, animationDelay }) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
   
    const imageUrl = `https://picsum.photos/id/${photo.id}/400/300`
   
    const handleHeartClick = (e) => {
      e.stopPropagation()
      onToggleFavourite(photo.id)
    }
   
    return (
      <article
        className="photo-card fade-up rounded-xl overflow-hidden bg-obsidian-800 cursor-pointer group"
        style={{
          animationDelay: `${animationDelay}s`,
          border: '1px solid rgba(255,255,255,0.05)',
        }}
        aria-label={`Photo by ${photo.author}`}
      >
        <div className="relative aspect-4/3 overflow-hidden bg-obsidian-700">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 skeleton" />
          )}
   
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-cream/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          )}
   
          <img
            src={imageUrl}
            alt={`Photograph by ${photo.author}`}
            loading="lazy"
            className={`
              w-full h-full object-cover
              transition-all duration-700
              group-hover:scale-105
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={() => setImageLoaded(true)}
            onError={() => { setImageError(true); setImageLoaded(true) }}
          />
   
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(10,10,11,0.85) 0%, transparent 55%)',
              opacity: isFavourited ? 1 : 0,
            }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(to top, rgba(10,10,11,0.70) 0%, transparent 50%)',
            }}
          />
   
          <button
            onClick={handleHeartClick}
            className={`
              heart-btn
              absolute top-3 right-3
              w-9 h-9 rounded-full
              flex items-center justify-center
              transition-all duration-200
              backdrop-blur-sm
              ${isFavourited
                ? 'favourited bg-amber-400/20 border border-amber-400/40'
                : 'bg-obsidian-950/60 border border-white/10 opacity-0 group-hover:opacity-100 hover:bg-obsidian-800/90'
              }
            `}
            aria-label={isFavourited ? 'Remove from favourites' : 'Add to favourites'}
            aria-pressed={isFavourited}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isFavourited ? '#fbbf24' : 'none'}
              stroke={isFavourited ? '#fbbf24' : '#f5f0e8'}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transition-colors duration-200"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
   
          {isFavourited && (
            <div
              className="absolute top-3 left-3 fade-in"
              title="In your favourites"
            >
              <div
                className="px-2 py-0.5 rounded-full font-mono text-[10px] tracking-widest uppercase"
                style={{
                  background: 'rgba(251,191,36,0.15)',
                  border: '1px solid rgba(251,191,36,0.35)',
                  color: '#fbbf24',
                }}
              >
                ✦ saved
              </div>
            </div>
          )}
        </div>
   
        <div className="px-4 py-3 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p
              className="font-display text-sm text-cream/85 truncate leading-snug"
              title={photo.author}
            >
              {photo.author}
            </p>
            <p className="font-mono text-[10px] text-cream/25 tracking-widest uppercase mt-0.5">
              #{photo.id}
            </p>
          </div>
   
          <span
            className="font-mono text-[10px] text-cream/20 tracking-wider shrink-0"
          >
            {photo.width}×{photo.height}
          </span>
        </div>
      </article>
    )
  }
   