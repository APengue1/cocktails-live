const Cocktail = require.main.require('./models/cocktail')

const SparklingWine = require.main.require('./models/ingredients/sparkling_wine')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Orange = require.main.require('./models/ingredients/orange')

class BucksFizz extends Cocktail {
  constructor() {
    super([
      SparklingWine,
      OrangeJuice,
      Orange
    ])
  }
}

module.exports = BucksFizz
