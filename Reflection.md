## Project Reflection

### Most Challenging Part:

The most challenging part of this project was managing the favorites feature across the entire application. I had to connect Context API with a custom useLocalStorage hook so that favorite recipes would stay saved even after refreshing the page. It was important to make sure the UI updated immediately when a recipe was added or removed from favorites.

Handling dynamic routes and fetching data at the same time was also challenging. I needed to properly manage loading and error states so the user experience stayed smooth while navigating between pages.

### Design Decision:
I decided to create a reusable useFetch custom hook instead of writing fetch logic inside each component. This made the code cleaner, easier to maintain, and more organized. I also chose to store only recipe IDs in the FavoritesContext instead of full recipe objects to keep the global state simple and lightweight.