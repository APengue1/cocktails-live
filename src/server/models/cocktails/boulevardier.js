const Cocktail = require.main.require('./models/cocktail')

const Bourbon = require.main.require('./models/ingredients/bourbon')
const RedVermouth = require.main.require('./models/ingredients/red_vermouth')
const Campari = require.main.require('./models/ingredients/campari')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class Boulevardier extends Cocktail {
  constructor() {
    super([
      Bourbon,
      RedVermouth,
      Campari,
      Orange,
      Ice
    ])
  }
}

module.exports = Boulevardier
