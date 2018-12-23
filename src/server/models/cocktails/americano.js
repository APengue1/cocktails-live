const Cocktail = require.main.require('./models/cocktail')

const Campari = require.main.require('./models/ingredients/campari')
const RedVermouth = require.main.require('./models/ingredients/red_vermouth')
const Soda = require.main.require('./models/ingredients/soda')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class Americano extends Cocktail {
  constructor() {
    super([
      Campari,
      RedVermouth,
      Soda,
      Orange,
      Ice
    ])
  }
}

module.exports = Americano
