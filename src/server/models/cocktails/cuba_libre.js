const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Cola = require.main.require('./models/ingredients/cola')
const Lime = require.main.require('./models/ingredients/lime')
const Ice = require.main.require('./models/ingredients/ice')

class CubaLibre extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Cola,
      Lime,
      Ice
    ])
  }
}

module.exports = CubaLibre
