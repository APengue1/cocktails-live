const Cocktail = require.main.require('./models/cocktail')

const Sambuca = require.main.require('./models/ingredients/sambuca')
const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const Tabasco = require.main.require('./models/ingredients/tabasco')

class Flatliner extends Cocktail {
  constructor() {
    super([
      Sambuca,
      WhiteTequila,
      Tabasco
    ])
  }
}

module.exports = Flatliner
