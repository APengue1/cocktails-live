const Cocktail = require.main.require('./models/cocktail')

const SparklingWine = require.main.require('./models/ingredients/sparkling_wine')
const Lemon = require.main.require('./models/ingredients/lemon')
const Strawberry = require.main.require('./models/ingredients/strawberry')
const Ice = require.main.require('./models/ingredients/ice')

class Rossini extends Cocktail {
  constructor() {
    super([
      SparklingWine,
      Lemon,
      Strawberry,
      Ice
    ])
  }
}

module.exports = Rossini
