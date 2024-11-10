# Recipe Website- Dessert Heaven -React project
### Contact details of the developers:
[Emanuel Sleyman](https://www.linkedin.com/in/emanuel-sleyman-660552293/), [Depinder Kaur](https://www.linkedin.com/in/depinderkaur/) and [Magnus Nording](https://www.linkedin.com/in/magnus-nording-674b77255/)

## Project documentation:
This project contains a source folder `src` which further contains the following-
* `components` folder
* `pages` folder
* `images` folder
* `App.jsx`, `App.css` and `main.jsx` files 

Each of the above is explained below.

## Components
Each component has its own .jsx file and .css file. 

Navigate to the components folder as follows-

`Project` --> `src` --> `components`

Within the components folder, the following sub-folders can be found (each of which contains respective components)-

1) ### Categories
* <b>CategoriesBar</b> is parent to the `AvailableCategories` component and uses it to get value for the selected category (if any category is selected by user).

* <b>AvailableCategories</b> is child to the `CategoriesBar` component and passes the value of all available categories. It even handles category selection, by passing the value of <i>selected category</i> to its parent i.e. `CategoriesBar`.

2) ### Footer
It contains references to the developers and contributors and name of the contributors group.

3) ### Header
Contains only the `HomeHeader` component.
* <b>HomeHeader</b> contains header i.e. site name, some citations to the home page.

4) ### Main
Contains components `Main`, `AvailableRecipes` and `RecipeCard` which are explained below-

* <b>Main</b> uses `AvailableRecipes` component to print out all the available recipes on the home page. Even has a `ScrollButton` component to scroll to top of the page.

* <b>AvailableRecipes</b> contains a function to create a `RecipeCard`, function which gets all available recipes

* <b>RecipeCard</b> creates a recipe card (which itself is a link to the full-recipe) for each of the available recipes as displayed on the home page.

5) ### RecipeMetaData
`RecipeMetaData` folder contains components which can be re-used in the project. eg. `IngredientCount` and `RecipeTime`.

* <b>IngredientCount</b> displays the number of ingredients used in the recipe.

* <b>RecipeTime</b> displays the time taken to cook the recipe.

6) ### ScrollButton
When the button to scroll up automatically is available, how much to scroll until its visible position.

7) ### Search
Contains only the `SearchBar` component.
* <b>SearchBar</b> component is used to fetch input from user input and then update the state.
it also has a prop that allows parent components to be updated with certain values

8) ### Utils
* <b>CommentForm</b> component takes in commentData and recipeId as parameters and the makes a post request to the server.

* <b>CommentList</b> component takes in comments and the print them out in a list of comments with username/or anonymized username, comments and date of comment.

* <b>HomePage</b> component has functions to fetch recipes, get sorted recipes and fetch by category.

* <b>RecipeCard</b> contains util functions to display a star-rating, categorize difficulty level for a recipe, calculate the corresponding difficulty bars and format the recipe time.

* <b>ViewRecipe</b>:
Important funtions when viewing the recipeCard and view a recipe in a seperate window, fetchComments, saveRecipeRating, getShortUnit and unit conversions.

9) ### ViewRecipe:
* <b>CommentForm</b>:
logic for handling and creating a new comment about a recipe

* <b>CommentList</b>:
component for retrieving comments and printing them out in a listed form

* <b>Ratings</b>:
Handle rating comment

* <b>ViewRecipe</b>:
parent component for creating a new recipe page with all components and having a function to create a pdf from the recipe template

* <b>RecipeMetaData</b>:
details about the recipe, rating, time to complete, ingredients

10) ### ScrollToTop:
This component is used in the Root.jsx file in the pages folder so that we land at the top of the newly opened page.

## Pages
Navigate to the pages folder as follows-
`Project` --> `src` --> `pages`

* <b>Error</b>: When a page not found, send the error message

* <b>Home</b>: The home page / landing page with contributing components

* <b>Root</b>: Root includes `React Outlet` which is a component provided by React `Router` that serves as a placeholder for child routes within a parent route.

## Images
The `images` folder in the `src` folder contains the image used on the landing page.

## Other files
The following files can be found in the `src` folder as well-

* <b>App.jsx</b>: It contains the React-Router, which further provides route to different pages, eg. `ViewRecipe` page to view a recipe, `CommentForm` page to leave a comment, `ErrorPage` that displays en error.

* <b>App.css</b>: It serves as the main CSS file for the app and therefore contain the root styling.

* <b>main.jsx</b>: This is the main entry point for a React application, responsible for rendering the root component.

## Other relevant information

[Swagger link](https://recept3-bolen.reky.se/swagger) to the backend api.

This project has been deployed on Netlify: [open project on Netlify](https://dessertheaven.netlify.app/)

You can even use the following link to open this project in any browser-

```bat
https://dessertheaven.netlify.app/
```

or scan the following QR-code to open it on your mobile

![QR-code for this website](public/qr-code-for-website.png)


## Useful Resources
[Folder structure in a React project (1)](https://legacy.reactjs.org/docs/faq-structure.html)

[Folder structure in a React project (2)](https://medium.com/@kthamodaran/react-8-best-practices-folder-structure-5dbda48a69e)

[Create recipe ingredients as tickable using React State](https://medium.com/@gbenleseun2016/creating-a-dynamic-checkbox-list-with-react-check-and-uncheck-with-ids-ea37eb3fc182)

[Create recipe instructions as tickable using HTML DOM](https://www.geeksforgeeks.org/html-dom-label-htmlfor-property/)

[Create a Scroll-to-top button](https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/)

[How to write JEST test (1)](https://medium.com/@razita.afrina/testing-fetch-api-calls-in-react-7f047ac2d220)

[How to write JEST test (2)](https://stackoverflow.com/questions/44596915/jest-mocking-console-error-tests-fails)

