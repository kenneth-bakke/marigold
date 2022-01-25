import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../AppContext.js';

export default function RecipeView() {
  const { selectedRecipeContext } = useContext(AppContext);
  const [selectedRecipe, setSelectedRecipe] = selectedRecipeContext;

  return (
    <div className="">
      <div className="">
        <div><h3>Recipe Title</h3></div>
        <div><h4>Ingredients</h4>
          <table>
            <thead>
              <tr>
                <td>Quantity</td>
                <td></td>
                <td>Ingredient</td>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
        <div>
          <h4>Method</h4>
        </div>
      </div>
      <div className="medium ui image">
        <img src="../assets/placeholder-pic.jpeg" alt="your recipe pic" />
      </div>
    </div>
  )
}