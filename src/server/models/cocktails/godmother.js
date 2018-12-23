const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const Amaretto = require.main.require('./models/ingredients/amaretto')
const Ice = require.main.require('./models/ingredients/ice')

class Godmother extends Cocktail {
  constructor() {
    super([
      Vodka,
      Amaretto,
      Ice
    ])
  }
}

module.exports = Godmother
