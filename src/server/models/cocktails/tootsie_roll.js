const Cocktail = require.main.require('./models/cocktail')

const Kahlua = require.main.require('./models/ingredients/kahlua')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Vodka = require.main.require('./models/ingredients/vodka')
const Ice = require.main.require('./models/ingredients/ice')

class TootsieRoll extends Cocktail {
  constructor() {
    super([
      Kahlua,
      OrangeJuice,
      Vodka,
      Ice
    ])
  }
}

module.exports = TootsieRoll
