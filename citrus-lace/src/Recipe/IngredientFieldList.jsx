import React, { Fragment } from 'react';
import IngredientField from './IngredientField.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function IngredientFieldList({ ingredients, removeIngredient }) {

  return (
    <Fragment>
      <List disablePadding dense>
        <ListItem><h3>Ingredients</h3></ListItem>
        {ingredients.map(ingredient => {
          return (
            <ListItem dense key={ingredient.name}>
              <ListItemText>
                {ingredient.quantity} {ingredient.uom} {ingredient.name}
              </ListItemText>
              <button onClick={() => removeIngredient(ingredient)} >Remove ingredient</button>
            </ListItem>
          )
        })}
      </List>
    </Fragment>
  )
}