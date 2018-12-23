const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Lime = require.main.require('./models/ingredients/lime')
const Mint = require.main.require('./models/ingredients/mint')
const Sugar = require.main.require('./models/ingredients/sugar')
const Soda = require.main.require('./models/ingredients/soda')
const Ice = require.main.require('./models/ingredients/ice')

class Mojito extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Lime,
      Mint,
      Sugar,
      Soda,
      Ice
    ])
  }
}

module.exports = Mojito
