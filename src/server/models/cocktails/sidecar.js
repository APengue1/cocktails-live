const Cocktail = require.main.require('./models/cocktail')

const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Cognac = require.main.require('./models/ingredients/cognac')
const Lemon = require.main.require('./models/ingredients/lemon')
const Sugar = require.main.require('./models/ingredients/sugar')
const Ice = require.main.require('./models/ingredients/ice')

class Sidecar extends Cocktail {
  constructor() {
    super([
      TripleSec,
      Cognac,
      Lemon,
      Sugar,
      Ice
    ])
  }
}

module.exports = Sidecar
