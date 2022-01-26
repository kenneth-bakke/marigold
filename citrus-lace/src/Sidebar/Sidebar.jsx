import React, { useState, useContext, Fragment } from 'react';
import AppContext from '../AppContext.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Sidebar ({ items, depthStep, depth }) {
  const { recipesContext, selectedRecipeContext, viewContext } = useContext(AppContext);
  const [selectedRecipe, setSelectedRecipe] = selectedRecipeContext;
  const [recipes, setRecipes] = recipesContext;
  const [view, setView] = viewContext;
  items[2].items = recipes;

  return (
    <div className="sidebar" >
      <List  dense>
        {items.map((item, i) => (
          <SidebarItem
            onClick={() => {
              if (item.name === 'add recipe') setView('Form')
            }}
            key={`${item.name}${i}`}
            depthStep={depthStep}
            depth={depth}
            {...item}
          />
        ))}
      </List>
    </div>
  )
}


function SidebarItem ({ label, items, depthStep = 10, depth = 0, ...rest }) {
  const { selectedRecipeContext , viewContext} = useContext(AppContext);
  const [selectedRecipe, setSelectedRecipe] = selectedRecipeContext;
  const [view, setView] = viewContext;

  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {label === 'My Recipes'
        ? (
          <List  dense>
            {items.map(item =>
              <SidebarItem
                key={item.id}
                label={item.recipe_title}
                depth={depth + 1}
                depthStep={depthStep}
                onClick={() => {
                  setSelectedRecipe(item);
                  setView('Recipe')
                }}
              />)
            }
          </List>
      )
      : Array.isArray(items) ? (
        <List  dense>
          {items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              onClick={() => {
                if (subItem.name === 'add recipe') setView('Form')
              }}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

export default Sidebar;