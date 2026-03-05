   #  Recipe Discovery App



  A fully responsive Recipe Discovery application built using the TheMealDB API.Users can browse recipe categories, view detailed recipes, search meals by name, and save their favorite recipes with persistent storage.                         


 ## Features:


 ### State Management & Data Fetching :

   * Built using React Hooks (useState, useEffect)

   * handling of:

     * Loading states (Spinner component)

     * Error states (ErrorMessage component)

   * Data fetched dynamically from TheMealDB API

### Custom Hooks:


1. useFetch

A reusable custom hook that:

  * Fetches data from an API endpoint

  * Manages:

       * data

       * loading

       * error

 * Used throughout the application for API communication.



2. useLocalStorage

A custom hook that:

  * Syncs state with localStorage

  * Persists user favorites across browser sessions.




### Global State Management (Context API):

* FavoritesContext:

Manages favorite recipes globally across the application.

Provides:

  * List of favorite recipe IDs

  *  Add recipe to favorites

  *  Remove recipe from favorites

  *  Check if recipe is already favorited

Favorites are persisted using the useLocalStorage hook.




### Application Pages & Routing

Built with React Router.

#### Home Page (/)

   * Displays all available recipe categories

   * Each category links to its category page



#### Category Page (/category/:categoryName)

  * Dynamic route

  * Displays recipes filtered by selected category

  * Each recipe links to its detailed page



#### Recipe Detail Page (/recipe/:recipeId)

  * Dynamic route

  * Displays:

    * Recipe image

    * Ingredients

    * Instructions

  * Includes: “Add to Favorites” / “Remove from Favorites” button

#### Favorites Page (/favorites)

  * Displays all saved favorite recipes

  * If empty → shows helpful message prompting user to explore

#### Search Results Page (/search?query=recipeName)

  * Search bar in shared Navbar

  * Searches recipes by name

  * Displays matching results dynamically

#### Reusable Components

  * Navbar

  * RecipeCard

  * Spinner

  * ErrorMessage


#### API Used

This project uses the free public API:

🥗 TheMealDB

Base URL:

https://www.themealdb.com/api/json/v1/1/



### Installation

   git clone:
       <https://github.com/Mith29/sba-10-recipe-discovery-app>
       
       cd recipe-discovery-app
       
       npm install
      
       npm run dev
