const Cocktail = require.main.require('./models/cocktail')

const Bourbon = require.main.require('./models/ingredients/bourbon')
const Sambuca = require.main.require('./models/ingredients/sambuca')
const Ice = require.main.require('./models/ingredients/ice')

class Anaconda extends Cocktail {
  constructor() {
    super([
      Bourbon,
      Sambuca,
      Ice
    ])
  }
}

module.exports = Anaconda
