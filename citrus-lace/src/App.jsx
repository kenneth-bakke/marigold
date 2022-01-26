import React, { useState, useEffect, Fragment } from 'react';
import getCookie from './utils/getCookie.js';
import RecipeForm from './Recipe/RecipeForm.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import items from './Sidebar/variables.js';
import AppContext from './AppContext.js';

const baseURL = 'http://localhost:8000/recipe'

export default function App () {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({});
  const csrftoken = getCookie('csrftoken');

  useEffect(() => {
    let clearId = setTimeout(() => {
      const getRecipes = async () => {
        try {
          const response = await fetch(`${baseURL}/recipes`);
          setRecipes(response);
          setSelectedRecipe(response[0]);
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

  // const selectRecipe = (recipe) => {
  //   setSelectedRecipe(recipe);
  // }

  const postRecipe = async (recipe) => {
    try {
      const response = await fetch(`${baseURL}/recipes/`, {
        method: 'POST',
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(recipe)
      });
      console.log(response.body);
      setRecipes(response);
      setSelectedRecipe(recipe);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Fragment>
      <AppContext.Provider value={{
        recipesContext: [recipes, setRecipes],
        selectedRecipeContext: [selectedRecipe, setSelectedRecipe],
      }}>
        <div className="header" >
          <i href="../public/favicon,ico" />
          <h1 className="header-text" >Add Recipe </h1>
        </div>
        <div className="ui container" >
          <div className="main-form">
            {/* <Sidebar items={items}/> */}
            <RecipeForm postRecipe={postRecipe} />
            {/* <RecipeView recipe={selectedRecipe} /> */}
          </div>
        </div>
      </AppContext.Provider>
    </Fragment>
  );
}