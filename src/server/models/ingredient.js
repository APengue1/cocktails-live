const Consumable = require.main.require('./models/consumable')

class Ingredient extends Consumable {
  consumable_files_pattern() {
    return 'ingredients/*.js'
  }
}

module.exports = Ingredient
