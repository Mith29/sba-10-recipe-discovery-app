import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { useContext } from "react";
import { FavouritesContext } from "../AppProviders";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";

function RecipeDetailPage() {
  const { idMeal } = useParams();
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavouritesContext);
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
  );
  const meal = data?.meals?.[0];
  const ingredients = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
  }
  if (loading)
    return (
      <div className="flex justify-center items-center h-60">
        <Spinner />
      </div>
    );
  if (error) return <ErrorMessage error={error} />;
  return (
  <>
    {meal && (
      <div className="min-h-screen py-10 px-4">
        
        {/* Header Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {meal.strMeal}
          </h2>

          <button
            onClick={() =>
              isFavorite(meal.idMeal)
                ? removeFavorite(meal.idMeal)
                : addFavorite(meal.idMeal)
            }
            className="p-2"
          >
            {isFavorite(meal.idMeal) ? (
              <SolidHeart className="w-8 h-8 text-red-500" />
            ) : (
              <OutlineHeart className="w-8 h-8 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto mt-6 grid gap-8 md:grid-cols-2">
          
          {/* Image Section */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <img
              className="w-full rounded-lg"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>

          {/* Ingredients */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Ingredients
            </h3>
            <ul className="space-y-2">
              {ingredients.map((item) => (
                <li
                  key={item}
                  className="bg-gray-50 p-2 rounded-md text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Instructions
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
      </div>
    )}
  </>
);
}
export default RecipeDetailPage;