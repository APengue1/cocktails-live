const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const Kahlua = require.main.require('./models/ingredients/kahlua')
const Baileys = require.main.require('./models/ingredients/baileys')
const Ice = require.main.require('./models/ingredients/ice')

class Mudslide extends Cocktail {
  constructor() {
    super([
      Vodka,
      Kahlua,
      Baileys,
      Ice
    ])
  }
}

module.exports = Mudslide
