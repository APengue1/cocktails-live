const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Lime = require.main.require('./models/ingredients/lime')
const Grenadine = require.main.require('./models/ingredients/grenadine')
const Ice = require.main.require('./models/ingredients/ice')

class BacardiCocktail extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Lime,
      Grenadine,
      Ice
    ])
  }
}

module.exports = BacardiCocktail
