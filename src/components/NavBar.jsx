import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [searchData, setSearchdata] = useState("");

  const navigate = useNavigate();
  function handleSearch() {
  navigate("/search?query="+ searchData);
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourite Recipes</Link>
          </li>
          </ul>
          
           <div>
             
              <input
              type="search"
              placeholder="Search for a recipe..."
              onChange={(e)=>setSearchdata(e.target.value)}
              value={searchData}
              />
             
              <button onClick={handleSearch}>Search</button>
             
           </div>
          
      </nav>
    </>
  );
}
export default NavBar;
