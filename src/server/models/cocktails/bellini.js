const Cocktail = require.main.require('./models/cocktail')

const SparklingWine = require.main.require('./models/ingredients/sparkling_wine')
const Peach = require.main.require('./models/ingredients/peach')

class Bellini extends Cocktail {
  constructor() {
    super([
      SparklingWine,
      Peach
    ])
  }
}

module.exports = Bellini
