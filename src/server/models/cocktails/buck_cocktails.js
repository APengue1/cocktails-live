const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Lime = require.main.require('./models/ingredients/lime')
const GingerAle = require.main.require('./models/ingredients/ginger_ale')
const Ice = require.main.require('./models/ingredients/ice')

class BuckCocktails extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Lime,
      GingerAle, 
      Ice
    ])
  }
}

module.exports = BuckCocktails
