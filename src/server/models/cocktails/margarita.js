const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Lime = require.main.require('./models/ingredients/lime')
const Salt = require.main.require('./models/ingredients/salt')
const Ice = require.main.require('./models/ingredients/ice')

class Margarita extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      TripleSec,
      Lime,
      Salt,
      Ice
    ])
  }
}

module.exports = Margarita
