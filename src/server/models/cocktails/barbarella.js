const Cocktail = require.main.require('./models/cocktail')

const Sambuca = require.main.require('./models/ingredients/sambuca')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Ice = require.main.require('./models/ingredients/ice')

class Barbarella extends Cocktail {
  constructor() {
    super([
      Sambuca,
      TripleSec,
      Ice
    ])
  }
}

module.exports = Barbarella
