const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const Lime = require.main.require('./models/ingredients/lime')
const Soda = require.main.require('./models/ingredients/soda')
const Ice = require.main.require('./models/ingredients/ice')

class GinRickey extends Cocktail {
  constructor() {
    super([
      Gin,
      Lime,
      Soda,
      Ice
    ])
  }
}

module.exports = GinRickey
