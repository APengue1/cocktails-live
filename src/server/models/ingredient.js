const glob = require.main.require('./lib/glob');

class Ingredient {
  name() {
    return this.constructor.name
  }

  static all_json() {
    return Ingredient.ingredient_files().map(ingredient_file => {
      const ingredient = new (require(ingredient_file))()
      return {
        name: ingredient.name()
      }
    })
  }

  static ingredient_files() {
    return glob(__dirname, 'ingredients/*.js')
  }
}

module.exports = Ingredient
