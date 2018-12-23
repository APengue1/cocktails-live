const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const Kahlua = require.main.require('./models/ingredients/kahlua')
const Ice = require.main.require('./models/ingredients/ice')

class BraveBull extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      Kahlua,
      Ice
    ])
  }
}

module.exports = BraveBull
