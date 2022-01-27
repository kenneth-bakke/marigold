import React, { useState, useEffect, Fragment } from 'react';
import getCookie from './utils/getCookie.js';
import RecipeForm from './Recipe/RecipeForm.jsx';
import RecipeView from './Recipe/RecipeView.jsx';
import NavHeader from './NavHeader/NavHeader.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import items from './Sidebar/variables.js';
import AppContext from './AppContext.js';

const baseURL = 'http://localhost:8000/recipe'

export default function App () {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [system, setSystem] = useState('Metric');
  const [view, setView] = useState('Form');
  const csrftoken = getCookie('csrftoken');
  const views = ['Form', 'Recipe']

  useEffect(() => {
    let clearId = setTimeout(() => {
      getRecipes();
    }, 100)

    return () => {
      clearTimeout(clearId);
    }
  }, [])

  const getRecipes = () => {
    fetch(`${baseURL}/recipes`)
    .then(res => res.json())
    .then(data => {
      setRecipes(data)
    })
    .catch(err => console.error(err));
  }

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  }

  const postRecipe = async (recipe) => {
    fetch(`${baseURL}/recipes/`, {
        method: 'POST',
        cache: 'no-cache',
        referrerPolicy: 'no-referrer',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(recipe)
      })
      .then(res => {
        getRecipes();
        selectRecipe(recipe);
        setView(views[1])
      })
      .catch(err => console.error(err));

  }

  const deleteRecipe = (id) => {
    fetch(`${baseURL}/recipes/`, {
      method: 'DELETE',
      cache: 'no-cache',
      referrerPolicy: 'no-referrer',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(id)
    })
    .then(getRecipes())
    .catch(err => console.error(err));
  }

  return (
    <Fragment>
      <AppContext.Provider value={{
        recipesContext: [recipes, setRecipes],
        selectedRecipeContext: [selectedRecipe, setSelectedRecipe],
        systemContext: [system, setSystem],
        viewContext: [view, setView]
      }}>
        <NavHeader />
        <div className="ui container" >
          <Sidebar items={items} />
          {view === 'Form' ? <RecipeForm postRecipe={postRecipe} />
          : view === 'Recipe' ? <RecipeView deleteRecipe={deleteRecipe} /> : null
          }
        </div>
      </AppContext.Provider>
    </Fragment>
  );
}