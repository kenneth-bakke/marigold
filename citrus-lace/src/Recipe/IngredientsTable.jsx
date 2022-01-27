import React, { useContext } from 'react';
import AppContext from '../AppContext.js';

export default function IngredientsTable({ ingredients }) {
  const { systemContext } = useContext(AppContext);
  const [system, setSystem] = systemContext;

  return (
    <div className="ingredients-container" >
      <table>
        <thead>
          <tr>
            <td>Qty</td>
            <td>Unit</td>
            <td>Ingredient</td>
          </tr>
        </thead>
        <tbody>
          {ingredients?.map((ingredient, i) =>
            <tr key={ingredient.name}>
              <td>{ingredient.quantity}</td>
              <td>{ingredient.uom}</td>
              <td>{ingredient.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}