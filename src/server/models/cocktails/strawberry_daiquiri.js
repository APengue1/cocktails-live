const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Strawberry = require.main.require('./models/ingredients/strawberry')
const Lemon = require.main.require('./models/ingredients/lemon')
const Lime = require.main.require('./models/ingredients/lime')
const Sugar = require.main.require('./models/ingredients/sugar')
const Ice = require.main.require('./models/ingredients/ice')

class StrawberryDaiquiri extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Strawberry,
      Lemon,
      Lime,
      Sugar,
      Ice
    ])
  }
}

module.exports = StrawberryDaiquiri
