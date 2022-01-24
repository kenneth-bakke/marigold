const items = [
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
    items: [
      { name: 'baking', label: 'Baking'},
      { name: 'pastry', label: 'Pastry'},
      { name: 'bfast', label: 'Breakfast'},
      { name: 'lunch', label: 'Lunch'},
      { name: 'dinner', label: 'Dinner'},
    ],
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
      { name: 'profile', label: 'Profile', items: [{ name: 'thing', label: 'Thing'}]},
    ]
  },
]

export default items;