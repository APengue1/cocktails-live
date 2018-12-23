const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Lemon = require.main.require('./models/ingredients/lemon')
const Sugar = require.main.require('./models/ingredients/sugar')
const Ice = require.main.require('./models/ingredients/ice')

class MartiniLemonDrop extends Cocktail {
  constructor() {
    super([
      Vodka,
      TripleSec,
      Lemon,
      Sugar,
      Ice
    ])
  }
}

module.exports = MartiniLemonDrop
