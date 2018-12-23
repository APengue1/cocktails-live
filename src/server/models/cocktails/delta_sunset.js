const Cocktail = require.main.require('./models/cocktail')

const Sambuca = require.main.require('./models/ingredients/sambuca')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Lemon = require.main.require('./models/ingredients/lemon')
const Ice = require.main.require('./models/ingredients/ice')

class DeltaSunset extends Cocktail {
  constructor() {
    super([
      Sambuca,
      TripleSec,
      Lemon,
      Ice
    ])
  }
}

module.exports = DeltaSunset
