const Cocktail = require.main.require('./models/cocktail')

const Bourbon = require.main.require('./models/ingredients/bourbon')
const Sugar = require.main.require('./models/ingredients/sugar')
const Mint = require.main.require('./models/ingredients/mint')
const Ice = require.main.require('./models/ingredients/ice')

class MintJulep extends Cocktail {
  constructor() {
    super([
      Bourbon,
      Sugar,
      Mint,
      Ice
    ])
  }
}

module.exports = MintJulep
