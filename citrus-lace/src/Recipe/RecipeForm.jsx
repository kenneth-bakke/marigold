import React, { useState, useEffect, useContext, Fragment } from 'react';
import AppContext from '../AppContext.js';
import IngredientField from './IngredientField.jsx';
import IngredientFieldList from './IngredientFieldList.jsx';

export default function RecipeForm({ postRecipe }) {
  const { newRecipeContext } = useContext(AppContext);
  const [newRecipe, setNewRecipe] = newRecipeContext;
  const [ingredientCount, setingredientCount] = useState(1);
  const [ingredientFields, setIngredientFields] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState('');
  const [recipeYield, setRecipeYield] = useState(0);
  const [recipeYieldType, setRecipeYieldType] = useState('');
  const [method, setMethod] = useState('');

  useEffect(() => {

  }, [ingredientFields])

  const addIngredientField = () => {
    setingredientCount(ingredientCount + 1);
    setIngredientFields(prev => [...prev, <IngredientField id={ingredientCount} updateIngredients={updateIngredients} />])
  }

  const updateIngredients = (e, newIngredient) => {
    e.preventDefault();
    setIngredients(prev => [...prev, newIngredient]);
    addIngredientField();
  }

  const saveRecipe = (e) => {
    e.preventDefault()
    let recipe = {
      title: title,
      yield: recipeYield,
      yieldType: recipeYieldType,
      ingredients: ingredients,
      method: method
    }
    setNewRecipe(recipe);
  }

  return (
    <Fragment>
      <form onClick={(e) => saveRecipe(e)} className="ui form" >
        <label for="Title" />
        <input type="text" name="Title" placeholder="Recipe Title" onChange={(e) => setTitle(e.target.value)} required="required" />
        <span className="yield-input">
          <label for="Yield" />
          <input type="text" name="Yield quantity" placeholder="Yield Quantity" onChange={(e) => setRecipeYield(e.target.value)} required="required" />
          <label for="Yield type" />
          <input type="text" name="Yield type" placeholder="Yield type" onChange={(e) => setRecipeYieldType(e.target.value)} required="required" />
        </span>
        <IngredientField id={ingredientCount} updateIngredients={updateIngredients} />
        <textarea onChange={(e) => setMethod(e.target.value)} placeholder="Method" ></textarea>
        <button onClick={(e) => saveRecipe(e)} >SaveRecipe</button>
      </form>
      <h3>Ingredients</h3>
      <IngredientFieldList ingredients={ingredients} />
    </Fragment>
  )
}