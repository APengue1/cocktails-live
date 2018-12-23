const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Lemon = require.main.require('./models/ingredients/lemon')
const Ice = require.main.require('./models/ingredients/ice')

class WhiteLady extends Cocktail {
  constructor() {
    super([
      Gin,
      TripleSec,
      Lemon,
      Ice
    ])
  }
}

module.exports = WhiteLady
