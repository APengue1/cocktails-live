const Cocktail = require.main.require('./models/cocktail')

const Sambuca = require.main.require('./models/ingredients/sambuca')
const Vodka = require.main.require('./models/ingredients/vodka')
const Tabasco = require.main.require('./models/ingredients/tabasco')

class RedSquare extends Cocktail {
  constructor() {
    super([
      Sambuca,
      Vodka,
      Tabasco
    ])
  }
}

module.exports = RedSquare
