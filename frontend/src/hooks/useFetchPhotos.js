import { useState, useEffect } from 'react'
 
const LIMIT = 30;
const TOTAL_PHOTOS = 210;

export const TOTAL_PAGES = Math.ceil(TOTAL_PHOTOS / LIMIT)

export function useFetchPhotos(page = 1) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    let cancelled = false
 
    const fetchPhotos = async () => {
      setLoading(true)
      setError(null)
 
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=30')
 
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
 
        const data = await response.json()
 
        if (!cancelled) {
          setPhotos(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Failed to load photos. Please try again.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }
 
    fetchPhotos()
 
    return () => {
      cancelled = true
    }
  }, [page])
 
  return { photos, loading, error }
}