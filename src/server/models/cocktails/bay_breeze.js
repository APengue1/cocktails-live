const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const CranberryJuice = require.main.require('./models/ingredients/cranberry_juice')
const PineappleJuice = require.main.require('./models/ingredients/pineapple_juice')
const Lime = require.main.require('./models/ingredients/lime')
const Ice = require.main.require('./models/ingredients/ice')

class BayBreeze extends Cocktail {
  constructor() {
    super([
      Vodka,
      CranberryJuice,
      PineappleJuice,
      Lime,
      Ice
    ])
  }
}

module.exports = BayBreeze
