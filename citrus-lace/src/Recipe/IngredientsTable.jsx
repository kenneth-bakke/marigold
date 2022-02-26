import React, { useContext, useEffect } from 'react';
import convertQuantities from './Converter/conversion';
import AppContext from '../AppContext.js';

export default function IngredientsTable({ ingredients }) {
  const { systemContext } = useContext(AppContext);
  const [system, setSystem] = systemContext;

  useEffect(() => {
    let clearId = setTimeout(() => {
      convertQuantities();
    }, 100);

    return () => clearTimeout(clearId);
  }, [system]);

  return (
    <div className='ingredients-container'>
      <table>
        <thead>
          <tr>
            <td>Qty</td>
            <td>Unit</td>
            <td>Ingredient</td>
          </tr>
        </thead>
        <tbody>
          {ingredients?.map((ingredient, i) => (
            <tr key={ingredient.name}>
              <td>{ingredient.quantity}</td>
              <td>{ingredient.uom}</td>
              <td>{ingredient.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
