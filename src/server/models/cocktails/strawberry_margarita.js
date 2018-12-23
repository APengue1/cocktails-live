const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Strawberry = require.main.require('./models/ingredients/strawberry')
const Lime = require.main.require('./models/ingredients/lime')
const Ice = require.main.require('./models/ingredients/ice')

class StrawberryMargarita extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      TripleSec,
      Strawberry,
      Lime,
      Ice
    ])
  }
}

module.exports = StrawberryMargarita
