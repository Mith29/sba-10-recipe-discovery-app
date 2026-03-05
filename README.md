                           Recipe Discovery App



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

  * Includes:

      * “Add to Favorites” / “Remove from Favorites” button

#### Favorites Page (/favorites)

  * Displays all saved favorite recipes

If empty → shows helpful message prompting user to explore

🔎 Search Results Page (/search?query=recipeName)

Search bar in shared Navbar

Searches recipes by name

Displays matching results dynamically

🧩 Reusable Components

Navbar

RecipeCard

Spinner

ErrorMessage

Layout components

The application is fully responsive and styled using modern CSS practices (Tailwind CSS / CSS Modules / CSS-in-JS depending on implementation).

🌐 API Used

This project uses the free public API:

🥗 TheMealDB

Base URL:

https://www.themealdb.com/api/json/v1/1/

Example Endpoints:

List all categories

/categories.php

Filter by category

/filter.php?c=Seafood

Lookup recipe details by ID

/lookup.php?i=52772

Search recipe by name

/search.php?s=Arrabiata
🛠️ Tech Stack

React

React Router

Context API

Custom Hooks

LocalStorage

TheMealDB API

📦 Installation
git clone <your-repo-url>
cd recipe-discovery-app
npm install
npm run dev
📌 Learning Objectives

This project demonstrates:

Custom Hook creation

API data handling

Global state management with Context

Dynamic routing

Persistent storage with localStorage

Reusable component architecture

Responsive UI design

✨ Future Improvements

Pagination

Recipe filtering (Area, Ingredient)

Dark mode

Animations

Unit testing

If you'd like, I can also:

Make a shorter student-friendly version

Make a more professional portfolio-ready version

Add screenshots section formatting

Format it specifically for GitHub markdown styling**

Just tell me 👌
