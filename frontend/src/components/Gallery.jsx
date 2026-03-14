import { useReducer, useEffect, useCallback, useMemo, useState } from 'react'
import { useFetchPhotos, TOTAL_PAGES } from '../hooks/useFetchPhotos'
import {
  favouritesReducer,
  ACTIONS,
  loadFavourites,
  saveFavourites,
} from '../hooks/favouritesReducer'
import SearchBar from './Searchbar'
import PhotoCard from './Photocard'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import EmptyState from './EmptyState'
import Pagination from './Pagination'

export default function Gallery({ onFavouriteCountChange }) {
  const [currentPage, setCurrentPage] = useState(1)
  const { photos, loading, error } = useFetchPhotos(currentPage)
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    new Set(),
  )

  useEffect(() => {
    const saved = loadFavourites()
    if (saved.length > 0) {
      dispatch({ type: ACTIONS.LOAD, ids: saved })
    }
  }, [])

  useEffect(() => {
    saveFavourites(favourites)
    onFavouriteCountChange(favourites.size)
  }, [favourites, onFavouriteCountChange])

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: ACTIONS.TOGGLE, id })
  }, [])

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page)
    setSearchQuery('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filteredPhotos = useMemo(() => {
    if (!searchQuery.trim()) return photos
    const query = searchQuery.toLowerCase().trim()
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    )
  }, [photos, searchQuery])

  if (loading) return <LoadingSpinner currentPage={currentPage} />

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <div className="pt-10 pb-8 text-center">
        <h2
          className="font-display text-3xl sm:text-4xl text-cream/90 fade-up"
          style={{ letterSpacing: '-0.02em' }}
        >
          Curated{' '}
          <span className="italic text-amber-400">Photography</span>
        </h2>
        <p className="font-body text-sm text-cream/30 mt-2 fade-up" style={{ animationDelay: '0.1s' }}>
          Page {currentPage} of {TOTAL_PAGES} &mdash; {photos.length} photos
        </p>
      </div>

      <div className="mb-8 fade-up" style={{ animationDelay: '0.15s' }}>
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          resultCount={filteredPhotos.length}
          totalCount={photos.length}
        />
      </div>

      {filteredPhotos.length === 0 && (
        <EmptyState query={searchQuery} />
      )}

     
      {/* {filteredPhotos.length > 0 && !searchQuery && (
        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={handlePageChange}
        />
      )} */}

      {filteredPhotos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourited={favourites.has(photo.id)}
              onToggleFavourite={handleToggleFavourite}
              animationDelay={Math.min(index, 7) * 0.08}
            />
          ))}
        </div>
      )}

      {filteredPhotos.length > 0 && !searchQuery && (
        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={handlePageChange}
        />
      )}

      <div className="mt-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-cream/15">
          Photos sourced from{' '}
          <a
            href="https://picsum.photos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/25 hover:text-amber-400/50 transition-colors duration-200 underline underline-offset-2"
          >
            picsum.photos
          </a>
        </p>
      </div>
    </main>
  )
}