const Cocktail = require.main.require('./models/cocktail')

const Vodka = require.main.require('./models/ingredients/vodka')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const Olive = require.main.require('./models/ingredients/olive')
const Lemon = require.main.require('./models/ingredients/lemon')
const Ice = require.main.require('./models/ingredients/ice')

class MartiniVodka extends Cocktail {
  constructor() {
    super([
      Vodka,
      DryVermouth,
      Olive,
      Lemon,
      Ice
    ])
  }
}

module.exports = MartiniVodka
