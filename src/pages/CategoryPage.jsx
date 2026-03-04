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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-6 pb-10">
  {meals?.map((item) => (
    <Link
      key={item.idMeal}
      to={"/recipe/" + item.idMeal}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={item.strMealThumb}
        alt={item.strMeal}
        className="w-full h-48 object-cover"
      />
      <h3 className="p-3 font-semibold text-center">
        {item.strMeal}
      </h3>
    </Link>
  ))}
</div>
    )
}
export default CategoryPage;