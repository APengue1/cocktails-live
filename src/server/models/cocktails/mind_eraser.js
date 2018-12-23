const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const Kahlua = require.main.require('./models/ingredients/kahlua')
const Tonic = require.main.require('./models/ingredients/tonic')
const Ice = require.main.require('./models/ingredients/ice')

class MindEraser extends Cocktail {
  constructor() {
    super([
      Vodka,
      Kahlua,
      Tonic,
      Ice
    ])
  }
}

module.exports = MindEraser
