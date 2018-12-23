const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const RedVermouth = require.main.require('./models/ingredients/red_vermouth')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class Bronx extends Cocktail {
  constructor() {
    super([
      Gin,
      RedVermouth,
      DryVermouth,
      Orange,
      Ice
    ])
  }
}

module.exports = Bronx
