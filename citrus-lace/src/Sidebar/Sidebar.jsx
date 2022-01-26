import React, { useState, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Sidebar ({ items, depthStep, depth }) {
  return (
    <div className="sidebar" >
      <List disablePadding dense>
        {items.map((item, i) => (
          <SidebarItem
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
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

export default Sidebar;