const Cocktail = require.main.require('./models/cocktail')

const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const SparklingWine = require.main.require('./models/ingredients/sparkling_wine')
const Orange = require.main.require('./models/ingredients/orange')

class Mimosa extends Cocktail {
  constructor() {
    super([
      OrangeJuice,
      SparklingWine,
      Orange
    ])
  }
}

module.exports = Mimosa
