import React, { useState, useEffect, useContext, Fragment } from 'react';
import AppContext from '../AppContext.js';
import IngredientField from './IngredientField.jsx';
import IngredientFieldList from './IngredientFieldList.jsx';
import convertSystemQuantities from './conversion.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function RecipeForm({ postRecipe }) {
  const { systemContext } = useContext(AppContext);
  const [system, setSystem] = systemContext;
  const [ingredients, setIngredients] = useState([]);
  const [ingredientFields, setIngredientFields] = useState([]);
  const [ingredientCount, setingredientCount] = useState(1);
  const [recipe, setRecipe] = useState({ingredients: ingredients, system: 'Metric'})
  const [valid, setValid] = useState(false);
  const [saved, setSaved] = useState(false);

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
    if (field === 'Metric' || field === 'Imperial') {
      setRecipe({...recipe, system: field })
      setSystem(field)
    } else {
      setRecipe({...recipe, [field]: e.target.value})
    }
  }

  const saveRecipe = (e) => {
    e.preventDefault()
    // checkRecipeValidity()
    // if (valid && !saved) {
      setSaved(true);
      postRecipe(recipe);
    // } else {
    //   alert('Looks like you\'re missing part of the recipe!')
    // }
  }

  const removeIngredient = (ingredient) => {
    let newIngredients = [...ingredients].filter(i => {
      return i !== ingredient
    });
    setIngredients(newIngredients)
  }

  const checkRecipeValidity = () => {
    if (
      !recipe.recipe_title ||
      !recipe.yield_amount ||
      !recipe.yield_type
    ) {
      setValid(false)
    } else {
      setValid(true);
    }
  }

  return (
    <div className="ui form">
      <span>
        <img className="add-recipe-logo" src="https://res.cloudinary.com/dhqnbwexr/image/upload/v1643311982/android-chrome-192x192_rpqt8p.png" alt="citrus lace logo" />
        <h1 className="header-text" > Add Recipe </h1>
      </span>
      <form className="ui form" >
        <input type="text" name="Title" placeholder="Recipe Title" onChange={(e) => updateRecipe(e, 'recipe_title')} required="required" autoFocus={true} />
        <span className="yield-input">
          <input type="text" name="Yield quantity" placeholder="Yield Quantity" onChange={(e) => updateRecipe(e, 'yield_amount')} required="required" />
          <input type="text" name="Yield type" placeholder="Yield type" onChange={(e) => updateRecipe(e, 'yield_type')} required="required" />
          <div className="system-container">
            <label htmlFor="Metric" ><h4>Metric</h4></label>
            <input type="radio" name="system"  defaultChecked={system === 'Metric' ? true : false }  onClick={(e) => updateRecipe(e, 'Metric')} />
            <label htmlFor="Imperial" ><h4>Imperial </h4></label>
            <input type="radio" name="system"  defaultChecked={system === 'Imperial' ? true : false } onClick={(e) => updateRecipe(e, 'Imperial')} />
          </div>
        </span>
        <IngredientField id={ingredientCount} updateIngredients={updateIngredients} />
        <textarea onChange={(e) => updateRecipe(e, 'method')} placeholder="Method" ></textarea>
        <button onClick={(e) => saveRecipe(e)} >{saved ? 'Saved!' : 'SaveRecipe'}</button>
      </form>
      {/* <h3>{recipe.title ? recipe.title : null}</h3>
      <h4>{recipe.yield ? recipe.yield : null} {recipe.yieldType ? recipe.yieldType : null}</h4> */}
      <IngredientFieldList ingredients={ingredients} removeIngredient={removeIngredient}/>
      {/* <h4>{recipe.method}</h4> */}
    </div>
  )
}