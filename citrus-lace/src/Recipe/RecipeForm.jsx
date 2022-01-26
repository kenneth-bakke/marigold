import React, { useState, useEffect, useContext, Fragment } from 'react';
import AppContext from '../AppContext.js';
import IngredientField from './IngredientField.jsx';
import IngredientFieldList from './IngredientFieldList.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function RecipeForm({ postRecipe }) {
  const [ingredientCount, setingredientCount] = useState(1);
  const [ingredientFields, setIngredientFields] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState({ingredients: ingredients})

  useEffect(() => {
    let clearId = setTimeout(() => {
      setRecipe({...recipe, ingredients: ingredients});
    }, 400)

    return () => clearTimeout(clearId);
  }, [ingredients])

  const addIngredientField = () => {
    setingredientCount(ingredientCount + 1);
    setIngredientFields(prev => [...prev, <IngredientField id={ingredientCount} updateIngredients={updateIngredients} />])
  }

  const updateIngredients = (e, newIngredient) => {
    e.preventDefault();
    setIngredients(prev => [...prev, newIngredient]);
    addIngredientField();
  }

  const updateRecipe = (e, field) => {
    setRecipe({...recipe, [field]: e.target.value})
  }

  const saveRecipe = (e) => {
    e.preventDefault()
    postRecipe(recipe);
  }

  return (
    <Fragment>
      <form className="ui form" >
        <input type="text" name="Title" placeholder="Recipe Title" onChange={(e) => updateRecipe(e, 'title')} required="required" autoFocus={true} />
        <span className="yield-input">
          <input type="text" name="Yield quantity" placeholder="Yield Quantity" onChange={(e) => updateRecipe(e, 'yield')} required="required" />
          <input type="text" name="Yield type" placeholder="Yield type" onChange={(e) => updateRecipe(e, 'yieldType')} required="required" />
        </span>
        <IngredientField id={ingredientCount} updateIngredients={updateIngredients} />
        <textarea onChange={(e) => updateRecipe(e, 'method')} placeholder="Method" ></textarea>
        <button onClick={(e) => saveRecipe(e)} >SaveRecipe</button>
      </form>
      {/* <h3>{recipe.title ? recipe.title : null}</h3>
      <h4>{recipe.yield ? recipe.yield : null} {recipe.yieldType ? recipe.yieldType : null}</h4> */}
      <IngredientFieldList ingredients={ingredients} />
      {/* <h4>{recipe.method}</h4> */}
    </Fragment>
  )
}