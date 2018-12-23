const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const RedVermouth = require.main.require('./models/ingredients/red_vermouth')
const Cherry = require.main.require('./models/ingredients/cherry')
const Ice = require.main.require('./models/ingredients/ice')

class MartiniSweet extends Cocktail {
  constructor() {
    super([
      Vodka,
      RedVermouth,
      Cherry,
      Ice
    ])
  }
}

module.exports = MartiniSweet
