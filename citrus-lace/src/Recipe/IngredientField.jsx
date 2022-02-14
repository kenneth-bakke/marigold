import React, { useState, useEffect, useContext,Fragment } from 'react';
import AppContext from '../AppContext.js';

export default function IngredientField({ id, updateIngredients }) {
  const [ingredient, setIngredient] = useState({})
  const { systemContext } = useContext(AppContext);
  const [system, setSystem] = systemContext;

  useEffect(() => {
    setIngredient({...ingredient, 'uom': 'ea'})
  }, [])

  const updateIngredient = (e, field) => {
    setIngredient({...ingredient, [field]: e.target.value})
  }

  const uomList = (sys) => {
    let weights = []
    let volumes = []
    if (sys.toLowerCase() === 'metric') {
      weights = ['mg', 'g', 'kg']
      volumes = ['ml', 'L']
      return (
        <select name="Unit of Measurement" placeholder="Unit of Measurement" onChange={(e) => updateIngredient(e, 'uom')} required="required">
          <option disabled={true} default={true} >Individual</option>
          <option>ea</option>
          <option disabled={true} default={true} >Weight</option>
          {weights.map(w => <option key={w}>{w}</option>)}
          <option disabled={true} default={true} >Volume</option>
          {volumes.map(v => <option key={v}>{v}</option>)}
        </select>
      )
    } else if (sys.toLowerCase() === 'imperial') {
      weights = ['oz', 'lb']
      volumes = ['tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gallon']
      return (
        <select name="Unit of Measurement" placeholder="Unit of Measurement" onChange={(e) => updateIngredient(e, 'uom')} required="required">
          <option disabled={true} default={true} >Individual</option>
          <option>ea</option>
          <option disabled={true} default={true} >Weight</option>
          {weights.map(w => <option key={w}>{w}</option>)}
          <option disabled={true} default={true} >Volume</option>
          {volumes.map(v => <option key={v}>{v}</option>)}
        </select>
      )
    } else {
      return null
    }
  }

  return (
    <Fragment key={id} >
      <div className="ingredient-input">
        <input type="text" name="Quantity" placeholder="Ingredient quantity" onChange={(e) => updateIngredient(e, 'quantity')} required="required" autoFocus={true} />
        {uomList(system)}
        <input type="text" name="Ingredient" placeholder="Ingredient name" onChange={(e) => updateIngredient(e, 'name')} required="required" />
        <button onClick={(e) => updateIngredients(e, ingredient)}>Add Ingredient</button>
      </div>
    </Fragment>
  )
}