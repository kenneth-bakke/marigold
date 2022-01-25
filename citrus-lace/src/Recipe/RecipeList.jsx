import React, { useState, useContext, useEffect } from 'react';

export default function RecipeList({ selectRecipe }) {
  const { recipesContext } = useContext(AppContext);
  const [recipes, setRecipes] = recipesContext;

  return (
    <div>
      <ul>
        {recipes.map(recipe => <li onClick={() => selectRecipe(recipe)}>{recipe.recipe_title}</li>)}
      </ul>
    </div>
  )
}