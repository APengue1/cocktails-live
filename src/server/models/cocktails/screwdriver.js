const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class Screwdriver extends Cocktail {
  constructor() {
    super([
      Vodka,
      OrangeJuice,
      Orange,
      Ice
    ])
  }
}

module.exports = Screwdriver
