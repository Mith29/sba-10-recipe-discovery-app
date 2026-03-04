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
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal,
  );

  const meal = data?.meals?.[0];

  // Dynamically extract ingredients
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

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
            
      {meal && (
        <div className="bg-teal-40 flex flex-col items-center">
                                 
          <h2 className=" text-3xl font-bold ">{meal.strMeal} Recipe</h2>
                     
          <button
            onClick={() =>
              isFavorite(meal.idMeal)
                ? removeFavorite(meal.idMeal)
                : addFavorite(meal.idMeal)
            }
            className="p-2 transition"
          >
            {isFavorite(meal.idMeal) ? (
              <SolidHeart className="w-10 h-10 text-red-500" />
            ) : (
              <OutlineHeart className="w-10 h-10 text-gray-400 hover:text-red-500" />
            )}
          </button>
                   
          <img
            className="w-100 h-100 rounded-md"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
                               
          <h3 className=" text-2xl font-bold ">Ingredients:</h3>
                    
          <ul>
                      
            {ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
                      
          </ul>
                    <h3 className=" text-2xl font-bold ">Instructions:</h3>
                    <p>{meal.strInstructions}</p>
                  
        </div>
      )}
          
    </>
  );
}

export default RecipeDetailPage;
