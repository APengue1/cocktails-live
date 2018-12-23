const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const Ice = require.main.require('./models/ingredients/ice')

class Gibson extends Cocktail {
  constructor() {
    super([
      Gin,
      DryVermouth,
      Ice
    ])
  }
}

module.exports = Gibson
