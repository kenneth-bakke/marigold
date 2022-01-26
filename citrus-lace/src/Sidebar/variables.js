const items = [
  {
    name: 'add recipe',
    label: 'Add Recipe',
  },
  {
    name: 'favorites',
    label: 'Favorites',
    items: [
      { name: 'recipes', label: 'Recipes'},
      { name: 'ingredients', label: 'Ingredients'},
    ]
  },
  {
    name: 'myRecipes',
    label: 'My Recipes',
    items: [],
  },
  {
    name: 'myIngredients',
    label: 'My Ingredients',
    items: [
      {
        name: 'proteins',
        label: 'Proteins',
      },
      {
        name: 'vegetables',
        label: 'Vegetables',
      },
      {
        name: 'fruit',
        label: 'Fruit',
      },
      {
        name: 'dairy',
        label: 'Dairy',
      },
    ]
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [
      { name: 'profile', label: 'Profile'},
      { name: 'notifications', label: 'Notifications'},
      { name: 'privacy', label: 'privacy'},
    ]
  },
]

export default items;