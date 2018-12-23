const Cocktail = require.main.require('./models/cocktail')

const Cognac = require.main.require('./models/ingredients/cognac')
const Amaretto = require.main.require('./models/ingredients/amaretto')
const Ice = require.main.require('./models/ingredients/ice')

class FrenchConnection extends Cocktail {
  constructor() {
    super([
      Cognac,
      Amaretto,
      Ice
    ])
  }
}

module.exports = FrenchConnection
