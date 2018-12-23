const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const Lime = require.main.require('./models/ingredients/lime')
const Sugar = require.main.require('./models/ingredients/sugar')
const Ice = require.main.require('./models/ingredients/ice')

class Caipiroska extends Cocktail {
  constructor() {
    super([
      Vodka,
      Lime,
      Sugar,
      Ice
    ])
  }
}

module.exports = Caipiroska
