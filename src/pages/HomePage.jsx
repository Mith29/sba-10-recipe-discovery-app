import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function HomePage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  const category = data?.categories;
  //   {
  //       "idCategory": "1",
  //       "strCategory": "Beef",
  //       "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
  //       "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
  //     },

    if(loading) return <Spinner/>
  if(error) return <ErrorMessage error={error}/>
  return (
    <>
      <h1>Recipe Category List</h1>
     
      <ul>
        {category &&
          category?.map((item) => (
            <Link key={item.idCategory} to={"/category/" + item.strCategory} >
              <li>{item.strCategory}</li>
            </Link>
          ))}
      </ul>
    </>
  );
}
export default HomePage;
