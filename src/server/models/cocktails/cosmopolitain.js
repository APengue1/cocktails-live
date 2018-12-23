const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Lime = require.main.require('./models/ingredients/lime')
const CranberryJuice = require.main.require('./models/ingredients/cranberry_juice')
const Ice = require.main.require('./models/ingredients/ice')

class Cosmopolitain extends Cocktail {
  constructor() {
    super([
      Vodka,
      TripleSec,
      Lime,
      CranberryJuice,
      Ice
    ])
  }
}

module.exports = Cosmopolitain
