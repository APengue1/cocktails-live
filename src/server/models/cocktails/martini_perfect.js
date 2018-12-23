const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const RedVermouth = require.main.require('./models/ingredients/red_vermouth')
const Lemon = require.main.require('./models/ingredients/lemon')
const Cherry = require.main.require('./models/ingredients/cherry')
const Ice = require.main.require('./models/ingredients/ice')

class MartiniPerfect extends Cocktail {
  constructor() {
    super([
      Gin,
      DryVermouth,
      RedVermouth,
      Lemon,
      Cherry,
      Ice
    ])
  }
}

module.exports = MartiniPerfect
