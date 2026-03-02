import {Route, Routes} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import CategoryPage from './pages/CategoryPage'
import FavouritesPage from "./pages/FavouritesPage"
import HomePage from './pages/HomePage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import SearchPage from './pages/SearchPage'
import AppProviders from "./AppProviders"

function App() {

  return (
    <>
    <AppProviders>
      <NavBar/>
  
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:strCategory" element={<CategoryPage/>} />
        <Route path="/recipe/:idMeal" element={<RecipeDetailPage/>} />
        <Route path="/favourites" element={<FavouritesPage/>} />
        <Route path="/search" element={<SearchPage/>} />

        <Route path="*" element={<>Not found</>} />
      </Routes>
      </AppProviders>
    </>
  )
}

export default App
