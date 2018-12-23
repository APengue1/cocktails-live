const Cocktail = require.main.require('./models/cocktail')

const Brandy = require.main.require('./models/ingredients/brandy')
const WhiteRum = require.main.require('./models/ingredients/white_rum')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Lemon = require.main.require('./models/ingredients/lemon')
const Ice = require.main.require('./models/ingredients/ice')

class BetweenTheSheets extends Cocktail {
  constructor() {
    super([
      Brandy,
      WhiteRum,
      TripleSec,
      Lemon,
      Ice
    ])
  }
}

module.exports = BetweenTheSheets
