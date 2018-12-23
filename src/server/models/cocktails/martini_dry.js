const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const Olive = require.main.require('./models/ingredients/olive')
const Ice = require.main.require('./models/ingredients/ice')

class MartiniDry extends Cocktail {
  constructor() {
    super([
      Gin,
      DryVermouth,
      Olive,
      Ice
    ])
  }
}

module.exports = MartiniDry
