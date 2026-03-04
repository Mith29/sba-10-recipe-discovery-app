import { Link } from "react-router-dom";

function RecipeCard({meal}) {


    return(
        <>
     <Link to={"/recipe/" + meal.idMeal}>
  <img className="w-100 h-100 rounded-md" src={meal.strMealThumb} alt={meal.strMeal} />
     <h2 className=" text-xl font-bold ">{meal.strMeal} Recipe</h2>
     </Link>
        </>
    )
}

export default RecipeCard;