const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const Tonic = require.main.require('./models/ingredients/tonic')
const Lime = require.main.require('./models/ingredients/lime')
const Ice = require.main.require('./models/ingredients/ice')

class GinTonic extends Cocktail {
  constructor() {
    super([
      Gin,
      Tonic,
      Lime,
      Ice
    ])
  }
}

module.exports = GinTonic
