import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function NavBar() {
  const [searchData, setSearchdata] = useState("");

  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
  navigate("/search?query="+ searchData);
  }

  return (
    <>
    <nav className="bg-sky-900">
      <div className="flex justify-between ml-20 mr-20 p-10">
        <h1 className="text-white text-4xl font-bold ">Recipe Discovery App</h1>
          <ul className="flex text-2xl font-bold text-white gap-[150px] m-5">
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourites">Favourite Recipes</Link>
            </li>
            </ul>
        
             <form onSubmit={handleSearch} className="flex relative w-80">
        
                <input
                type="search"
                placeholder="Search for a recipe..."
                onChange={(e)=>setSearchdata(e.target.value)}
                value={searchData}
                className="border bg-white p-2 pl-10 rounded-lg w-full"
                />
         <MagnifyingGlassIcon
        className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-900"
      />
             
        
             </form>
                </div>
              </nav>
   
          
     
    </>
  );
}
export default NavBar;
