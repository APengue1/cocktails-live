const Cocktail = require.main.require('./models/cocktail')

const Honey = require.main.require('./models/ingredients/honey')
const Whiskey = require.main.require('./models/ingredients/whiskey')
const Lemon = require.main.require('./models/ingredients/lemon')
const Water = require.main.require('./models/ingredients/water')

class HotToddy extends Cocktail {
  constructor() {
    super([
      Honey,
      Whiskey,
      Lemon,
      Water
    ])
  }
}

module.exports = HotToddy
