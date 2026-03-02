import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function CategoryPage() {
    const{strCategory} = useParams();
const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory,
  );
//   {
//       "strMeal": "Arroz con gambas y calamar",
//       "strMealThumb": "https://www.themealdb.com/images/media/meals/jc6oub1763196663.jpg",
//       "idMeal": "53147"
//     },


  const meals = data?.meals;
  if(loading) return <Spinner/>
  if(error) return <ErrorMessage error={error}/>

    return(
        <>
      <h2>{strCategory} Recipes</h2>
    
    <ul>
        {meals &&
          meals?.map((item) => (
            <Link key={item.idMeal} to={"/recipe/" + item.idMeal} >
              <li>{item.strMeal}</li>
            </Link>
          ))}
      </ul>

        </>
    )
}
export default CategoryPage;