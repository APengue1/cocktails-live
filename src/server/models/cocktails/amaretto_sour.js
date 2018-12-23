const Cocktail = require.main.require('./models/cocktail')

const Amaretto = require.main.require('./models/ingredients/amaretto')
const Lemon = require.main.require('./models/ingredients/lemon')
const Ice = require.main.require('./models/ingredients/ice')

class AmarettoSour extends Cocktail {
  constructor() {
    super([
      Amaretto,
      Lemon,
      Ice
    ])
  }
}

module.exports = AmarettoSour
