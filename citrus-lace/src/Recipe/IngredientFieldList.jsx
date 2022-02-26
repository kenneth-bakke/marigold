import React, { Fragment } from 'react';
import IngredientField from './IngredientField.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function IngredientFieldList({ ingredients, removeIngredient }) {
  return (
    <Fragment>
      <List disablePadding dense>
        <ListItem>
          <h3>Ingredients</h3>
        </ListItem>
        {ingredients.map((ingredient) => {
          return (
            <ListItem dense key={ingredient.name}>
              <ListItemText>
                {ingredient.quantity} {ingredient.uom} {ingredient.name}
              </ListItemText>
              <button onClick={() => removeIngredient(ingredient)}>
                Remove ingredient
              </button>
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
}
