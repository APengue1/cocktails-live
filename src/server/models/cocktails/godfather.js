const Cocktail = require.main.require('./models/cocktail')

const Whiskey = require.main.require('./models/ingredients/whiskey')
const Amaretto = require.main.require('./models/ingredients/amaretto')
const Ice = require.main.require('./models/ingredients/ice')

class Godfather extends Cocktail {
  constructor() {
    super([
      Whiskey,
      Amaretto,
      Ice
    ])
  }
}

module.exports = Godfather
