import { Link } from "react-router-dom";

function RecipeCard({meal}) {


    return(
        <>
     <Link to={"/recipe/" + meal.idMeal}>
  <img src={meal.strMealThumb} alt={meal.strMeal} />
     <h2>{meal.strMeal} Recipe</h2>
     </Link>
        </>
    )
}

export default RecipeCard;