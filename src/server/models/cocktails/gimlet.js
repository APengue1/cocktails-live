const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const Lime = require.main.require('./models/ingredients/lime')
const Ice = require.main.require('./models/ingredients/ice')

class Gimlet extends Cocktail {
  constructor() {
    super([
      Gin,
      Lime,
      Ice
    ])
  }
}

module.exports = Gimlet
