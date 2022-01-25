import React, { Fragment } from 'react';
import IngredientField from './IngredientField.jsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function IngredientFieldList({ ingredients }) {

  return (
    <Fragment>
      <List disablePadding dense>
        {ingredients.map(ingredient => {
          return (
            <ListItem dense>
              <ListItemText>
                {ingredient.quantity} {ingredient.uom} {ingredient.name}
              </ListItemText>
            </ListItem>
          )
        })}
      </List>
    </Fragment>
  )
}