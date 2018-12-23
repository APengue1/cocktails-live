const Cocktail = require.main.require('./models/cocktail')

const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Campari = require.main.require('./models/ingredients/campari')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class Garibaldi extends Cocktail {
  constructor() {
    super([
      OrangeJuice,
      Campari,
      Orange,
      Ice
    ])
  }
}

module.exports = Garibaldi
