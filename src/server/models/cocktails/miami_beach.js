const Cocktail = require.main.require('./models/cocktail')

const Whiskey = require.main.require('./models/ingredients/whiskey')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const GrapefruitJuice = require.main.require('./models/ingredients/grapefruit_juice')
const Ice = require.main.require('./models/ingredients/ice')

class MiamiBeach extends Cocktail {
  constructor() {
    super([
      Whiskey,
      DryVermouth,
      GrapefruitJuice,
      Ice
    ])
  }
}

module.exports = MiamiBeach
