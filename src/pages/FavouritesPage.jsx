import { useContext } from "react";
import { FavouritesContext } from "../AppProviders";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";


function FavouritesPage() {
  const { favorites} = useContext(FavouritesContext);

  if (favorites.length === 0)
    return 
      <p>No favourites added yet! Browse and add your favourite recipe!</p>;


  return (
    <>
      {favorites.map((id) => (
        <FavouriteRecipe key={id} id={id} />
      ))}
    </>
  );
}
export default FavouritesPage;

function FavouriteRecipe({ id }) {
  const { data,error, loading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id,
  );
  if (!data?.meals) return null;
  const meal = data.meals[0];

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return (<>
  {<RecipeCard key ={meal.idMeal} meal={meal} />} 
  </>
  );
}
