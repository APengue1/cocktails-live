const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const Tabasco = require.main.require('./models/ingredients/tabasco')

class Chupacabra extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      Tabasco
    ])
  }
}

module.exports = Chupacabra
