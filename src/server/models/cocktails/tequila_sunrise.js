const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Grenadine = require.main.require('./models/ingredients/grenadine')
const Orange = require.main.require('./models/ingredients/orange')
const Cherry = require.main.require('./models/ingredients/cherry')
const Ice = require.main.require('./models/ingredients/ice')

class TequilaSunrise extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      OrangeJuice,
      Grenadine,
      Orange,
      Cherry,
      Ice
    ])
  }
}

module.exports = TequilaSunrise
