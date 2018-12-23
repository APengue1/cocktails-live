const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Lime = require.main.require('./models/ingredients/lime')
const Soda = require.main.require('./models/ingredients/soda')
const Ice = require.main.require('./models/ingredients/ice')

class Rickey extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Lime,
      Soda,
      Ice
    ])
  }
}

module.exports = Rickey
