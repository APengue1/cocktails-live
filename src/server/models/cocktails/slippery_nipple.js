const Cocktail = require.main.require('./models/cocktail')

const Sambuca = require.main.require('./models/ingredients/sambuca')
const Baileys = require.main.require('./models/ingredients/baileys')
const Grenadine = require.main.require('./models/ingredients/grenadine')

class SlipperyNipple extends Cocktail {
  constructor() {
    super([
      Sambuca,
      Baileys,
      Grenadine
    ])
  }
}

module.exports = SlipperyNipple
