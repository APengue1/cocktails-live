const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Ice = require.main.require('./models/ingredients/ice')

class HornyBull extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      OrangeJuice,
      Ice
    ])
  }
}

module.exports = HornyBull
