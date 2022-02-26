import React, { useState, useContext, useEffect, Fragment } from 'react';
import AppContext from '../AppContext.js';
import SystemRadio from './SystemRadio.jsx';
import IngredientsTable from './IngredientsTable.jsx';
import urls from './urls.js';

export default function RecipeView({ deleteRecipe }) {
  const { selectedRecipeContext, systemContext } = useContext(AppContext);
  const [setSystem] = systemContext;
  const [selectedRecipe, setSelectedRecipe] = selectedRecipeContext;
  const {
    id,
    recipe_title,
    yield_amount,
    yield_type,
    system,
    ingredients,
    method,
  } = selectedRecipe;

  function convertTo() {}

  const renderSystem = () => {
    return (
      <div className='system-container'>
        <label htmlFor='Metric'>
          <h4>Metric</h4>
        </label>
        <input
          type='radio'
          name='system'
          defaultChecked={system === 'Metric' ? true : false}
          onClick={() => convertTo('Metric')}
        />
        <label htmlFor='Imperial'>
          <h4>Imperial </h4>
        </label>
        <input
          type='radio'
          name='system'
          defaultChecked={system === 'Imperial' ? true : false}
          onClick={() => convertTo('Imperial')}
        />
      </div>
    );
  };

  return (
    <Fragment>
      <div className='recipe-details-container'>
        <div className='title-container'>
          <h2>{recipe_title}</h2>
          <div className='title-details'>
            <h3>
              Makes {yield_amount} {yield_type}
            </h3>
          </div>
          {renderSystem(system)}
          <IngredientsTable ingredients={ingredients} system={system} />
          <div className='directions-container'>
            <h3>Directions</h3>
            <p>{method}</p>
            <button onClick={() => deleteRecipe(id)}>Delete recipe</button>
          </div>
        </div>
      </div>
      <div className='medium ui image'>
        <img src={urls[selectedRecipe.id]} alt='your recipe pic' />
      </div>
    </Fragment>
  );
}
