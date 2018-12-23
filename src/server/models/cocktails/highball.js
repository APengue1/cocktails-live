const Cocktail = require.main.require('./models/cocktail')

const Whiskey = require.main.require('./models/ingredients/whiskey')
const GingerAle = require.main.require('./models/ingredients/ginger_ale')
const Ice = require.main.require('./models/ingredients/ice')

class Highball extends Cocktail {
  constructor() {
    super([
      Whiskey,
      GingerAle,
      Ice
    ])
  }
}

module.exports = Highball
