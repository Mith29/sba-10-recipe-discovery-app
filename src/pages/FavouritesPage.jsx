import { useContext } from "react";
import { FavouritesContext } from "../AppProviders";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";


function FavouritesPage() {
  const { favorites } = useContext(FavouritesContext);
  if (favorites.length === 0)
    return (
      <div className="flex justify-center items-center h-60 ">
        <p className="text-gray-600 text-lg text-center">
          No Favorites Yet! Browse and add your favorite recipes 
        </p>
      </div>
    );
  return (
    <div className="p-6 bg-mauve-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Favorite Recipes
      </h1>
      {/* Responsive Grid */}
      <div
        className="grid gap-6 
                   grid-cols-1 
                   sm:grid-cols-2 
                   md:grid-cols-3 
                   lg:grid-cols-4"
      >
        {favorites.map((id) => (
          <FavoritesRecipe key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
export default FavouritesPage;
function FavoritesRecipe({ id }) {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data?.meals) return null;
  const meal = data.meals[0];
  return <RecipeCard meal={meal} />;
}