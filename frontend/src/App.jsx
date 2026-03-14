import { useState } from 'react'
import { useCallback } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  const [favouriteCount, setFavouriteCount] = useState(0)
 
  const handleFavouriteCountChange = useCallback((count) => {
    setFavouriteCount(count)
  }, [])

  return (
    <div className="grain min-h-screen" style={{ background: '#0a0a0b' }}>
      <Header favouriteCount={favouriteCount} />
      <Gallery onFavouriteCountChange={handleFavouriteCountChange} />
    </div>
  )
}

export default App
