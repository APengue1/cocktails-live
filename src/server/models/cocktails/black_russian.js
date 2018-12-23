const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const Kahlua = require.main.require('./models/ingredients/kahlua')
const Ice = require.main.require('./models/ingredients/ice')

class BlackRussian extends Cocktail {
  constructor() {
    super([
      Vodka,
      Kahlua,
      Ice
    ])
  }
}

module.exports = BlackRussian
