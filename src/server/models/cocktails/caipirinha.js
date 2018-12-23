const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Lime = require.main.require('./models/ingredients/lime')
const Sugar = require.main.require('./models/ingredients/sugar')
const Ice = require.main.require('./models/ingredients/ice')

class Caipirinha extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Lime,
      Sugar,
      Ice
    ])
  }
}

module.exports = Caipirinha
