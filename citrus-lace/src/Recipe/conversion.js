export default function convertSystemQuantities(system, ingredients) {
  // If metric, switch to imperial
  if (system === 'Metric') {
    ingredients = ingredients.map(i => {
      if (i.quantity === 'mg') {
        i.quantity = (i.quantity * 3.5274).toFixed(2)
        i.uom = 'oz'
      }
      if (i.quantity === 'g') {
        i.quantity = (i.quantity * 0.035274).toFixed(2)
        i.uom = 'oz'
      }
      if (i.quantity === 'kg') {
        i.quantity = (i.quantity * 2.2046249999752).toFixed(2)
        i.uom = 'lb'
      }
      if (i.quantity === 'ml') {
        i.quantity = (i.quantity * 0.033814).toFixed(2)
        if (i.quantity < 1) {
          i.uom = 'tsp'
        } else if (i.quantity < 3) {
          i.uom = 'tbsp'
        } else if (i.quantity < 8) {
          i.uom = 'fl oz'
        } else if (i.quantity < 16) {
          i.uom = 'cup'
        } else if (i.quantity < 32) {
          i.uom = 'pint'
        } else if (i.quantity < 64) {
          i.uom = 'quart'
        }
      }
      if (i.quantity === 'L') {
        i.quantity = (i.quantity * 1.05669).toFixed(2);
        if (i.quantity < 1) {
          i.uom = 'pint'
        } else if (i.quantity < 4) {
          i.uom = 'quart'
        } else {
          i.uom = 'gallon'
        }
      }
    })
  // Otherwise switch from imperial to metric
  } else {
    ingredients = ingredients.map(i => {
      if (i.quantity === 'oz') {
        i.quantity = Math.round(i.quantity * 28.3495).toFixed()
        if (i.quantity > 1000) {
          i.uom = 'kg'
        } else if (i.quantity < 1) {
          i.uom = 'mg'
        } else {
          i.uom = 'g'
        }
      } else if (i.quantity === 'lb') {
        i.quantity = Math.round(i.quantity * 0.453592).toFixed()
        if (i.quantity > 1) {
          i.uom = 'kg'
        } else {
          i.uom = 'g'
        }
      } else if (i.quantity === 'tsp') {
        i.quantity = Math.round(i.quantity * 4.92892).toFixed()
        i.uom = 'ml'
      } else if (i.quantity === 'tbsp') {
        i.quantity = Math.round(i.quantity * 14.7868).toFixed()
        i.uom = 'ml'
      } else if (i.quantity === 'fl oz') {
        i.quantity = Math.round(i.quantity * 29.5735).toFixed()
        i.uom = 'ml'
      } else if (i.quantity === 'cup') {
        i.quantity = Math.round(i.quantity * 0.24).toFixed()
        i.uom = 'L'
      } else if (i.quantity === 'pint') {
        i.quantity = Math.round(i.quantity * 0.473176).toFixed()
        i.uom = 'L'
      } else if (i.quantity === 'quart') {
        i.quantity = Math.round(i.quantity * 0.946353).toFixed()
        i.uom = 'L'
      } else {
        i.quantity = Math.round(i.quantity * 3.78541).toFixed()
        i.uom = 'L'
      }
    })
  }

  return ingredients
}