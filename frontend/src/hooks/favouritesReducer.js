export const ACTIONS = {
    TOGGLE: 'TOGGLE',
    LOAD: 'LOAD',
  }

  export function favouritesReducer(state, action) {
    switch (action.type) {
      case ACTIONS.TOGGLE: {
        const next = new Set(state)
        if (next.has(action.id)) {
          next.delete(action.id)
        } else {
          next.add(action.id)
        }
        return next
      }
   
      case ACTIONS.LOAD: {
        return new Set(action.ids)
      }
   
      default:
        return state
    }
  }
   
   
  const STORAGE_KEY = 'focus_fusion_favourites'
   
  export function loadFavourites() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  }
   
  export function saveFavourites(favouriteSet) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...favouriteSet]))
    } catch {
        console.error("storage is unavailable");
    }
  }