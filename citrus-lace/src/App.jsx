import React, { useState, useEffect, Fragment } from 'react';

import AppContext from './AppContext.js';
import Sidebar from './Sidebar/Sidebar.jsx';
import items from './Sidebar/variables.js';

const baseURL = 'http://localhost:8000/recipe'

export default function App () {
  const [ingredients, setIngredients] = useState([])
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState({})

  useEffect(() => {
    let clearId = setTimeout(() => {
      const getRecipes = async () => {
        try {
          const response = await fetch(`${baseURL}/recipes`)
          setRecipes(response)
          setSelectedRecipe(response[0])
        } catch (err) {
          console.error(err)
        }
      }

      const getIngredients = async () => {
        try {
          const response = await fetch(`${baseURL}/ingredients`)
          setIngredients(response)
        } catch (err) {
          console.error(err)
        }
      }

      getRecipes()
      getIngredients()
    }, 100)

    return () => {
      clearTimeout(clearId)
    }
  }, [])


  return (
    <Fragment>
      <AppContext.Provider value={{
        recipeContext: [recipes, setRecipes],
        ingredientsContext: [ingredients, setIngredients],
        selectedRecipeContext: [selectedRecipe, setSelectedRecipe]
      }}>
        <h1>BIG OL TEST</h1>
        <div className="container" >
          <Sidebar items={items}/>
          <div className="recipe-page" >RECIPE PAGE HERE</div>
        </div>
      </AppContext.Provider>
    </Fragment>
  );
}