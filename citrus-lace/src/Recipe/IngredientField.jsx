import React, { useState, useEffect, Fragment } from 'react';

export default function IngredientField({ id, updateIngredients }) {
  const [ingredient, setIngredient] = useState({})

  const updateIngredient = (e, field) => {
    setIngredient({...ingredient, [field]: e.target.value})
  }

  return (
    <Fragment key={id} >
      <div className="ingredient-input">
        <input type="text" name="Quantity" placeholder="Ingredient quantity" onChange={(e) => updateIngredient(e, 'quantity')} required="required" autoFocus={true} />
        <input type="text" name="Unit of Measurement" placeholder="Unit of Measurement" onChange={(e) => updateIngredient(e, 'uom')} required="required" />
        <input type="text" name="Ingredient" placeholder="Ingredient name" onChange={(e) => updateIngredient(e, 'name')} required="required" />
        <button onClick={(e) => updateIngredients(e, ingredient)}>Add Ingredient</button>
      </div>
    </Fragment>
  )
}