const Cocktail = require.main.require('./models/cocktail')

const Amaretto = require.main.require('./models/ingredients/amaretto')
const Baileys = require.main.require('./models/ingredients/baileys')

class BlowJob extends Cocktail {
  constructor() {
    super([
      Amaretto,
      Baileys
    ])
  }
}

module.exports = BlowJob
