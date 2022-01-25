import React, { useState, useEffect, Fragment } from 'react';

import AppContext from './AppContext.js';
import Sidebar from './Sidebar/Sidebar.jsx';
import items from './Sidebar/variables.js';
// import RecipeList  from './Recipe/RecipeList.jsx';
// import RecipeView from './Recipe/RecipeView.jsx';
import RecipeForm from './Recipe/RecipeForm.jsx';

const baseURL = 'http://localhost:8000/recipe'

export default function App () {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [addRecipe, setAddRecipe] = useState(false);
  const [newRecipe, setNewRecipe] = useState({});
  const [view, setView] = useState('Add');
  const views = ['Add', 'Page', 'List'];

  useEffect(() => {
    let clearId = setTimeout(() => {
      const getRecipes = async () => {
        try {
          const response = await fetch(`${baseURL}/recipes`);
          setRecipes(response);
          setSelectedRecipe(response[0])
          console.log(response.body);
        } catch (err) {
          console.error(err);
        }
      }

      getRecipes();
    }, 100)

    return () => {
      clearTimeout(clearId);
    }
  }, [])

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  }

  const postRecipe = async (recipe) => {
    try {
      await fetch(`${baseURL}/save`, newRecipe);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Fragment>
      <AppContext.Provider value={{
        recipesContext: [recipes, setRecipes],
        ingredientsContext: [ingredients, setIngredients],
        selectedRecipeContext: [selectedRecipe, setSelectedRecipe],
        newRecipeContext: [newRecipe, setNewRecipe]
      }}>
        <div className="header" >
          <i href="../public/favicon,ico" />
          <h1 className="header-text" >{view} Recipe </h1>
        </div>
        <div className="ui container" >
          <Sidebar items={items}/>
          <RecipeForm postRecipe={postRecipe} />
        </div>
          {/* <RecipeList selectRecipe={selectRecipe}/> */}
          {/* <RecipeView /> */}
      </AppContext.Provider>
    </Fragment>
  );
}