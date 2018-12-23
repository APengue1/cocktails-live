const Cocktail = require.main.require('./models/cocktail')

const Amaretto = require.main.require('./models/ingredients/amaretto')
const Baileys = require.main.require('./models/ingredients/baileys')
const Cognac = require.main.require('./models/ingredients/cognac')

class ABC extends Cocktail {
  constructor() {
    super([
      Amaretto,
      Baileys,
      Cognac
    ])
  }
}

module.exports = ABC
