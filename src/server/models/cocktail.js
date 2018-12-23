const Consumable = require.main.require('./models/consumable')

class Cocktail extends Consumable {
  constructor(Ingredients = []) {
    super()
    this.ingredients = Ingredients.map(Ingredient => new Ingredient())
  }

  consumable_files_pattern() {
    return 'cocktails/*.js'
  }

  json() {
    return Object.assign(super.json(), {
      ingredients: this.ingredients.map(ingredient => ingredient.json())
    })
  }
}

module.exports = Cocktail
