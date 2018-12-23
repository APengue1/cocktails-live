const Cocktail = require.main.require('./models/cocktail')

const Whiskey = require.main.require('./models/ingredients/whiskey')
const Baileys = require.main.require('./models/ingredients/baileys')
const Stout = require.main.require('./models/ingredients/stout')

class IrishCarBomb extends Cocktail {
  constructor() {
    super([
      Whiskey,
      Baileys,
      Stout
    ])
  }
}

module.exports = IrishCarBomb
