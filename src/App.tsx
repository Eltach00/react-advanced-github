import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import FavouritesPage from './Pages/FavouritesPage'
import HomePage from './Pages/HomePage'
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  )
}

export default App
