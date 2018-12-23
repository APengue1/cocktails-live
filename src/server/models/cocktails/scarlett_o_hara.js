const Cocktail = require.main.require('./models/cocktail')

const Bourbon = require.main.require('./models/ingredients/bourbon')
const Lime = require.main.require('./models/ingredients/lime')
const CranberryJuice = require.main.require('./models/ingredients/cranberry_juice')
const Ice = require.main.require('./models/ingredients/ice')

class ScarlettOHara extends Cocktail {
  constructor() {
    super([
      Bourbon,
      Lime,
      CranberryJuice,
      Ice
    ])
  }
}

module.exports = ScarlettOHara
