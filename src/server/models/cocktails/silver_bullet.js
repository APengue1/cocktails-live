const Cocktail = require.main.require('./models/cocktail')

const Whiskey = require.main.require('./models/ingredients/whiskey')
const Gin = require.main.require('./models/ingredients/gin')
const Lemon = require.main.require('./models/ingredients/lemon')
const Ice = require.main.require('./models/ingredients/ice')

class SilverBullet extends Cocktail {
  constructor() {
    super([
      Whiskey,
      Gin,
      Lemon,
      Ice
    ])
  }
}

module.exports = SilverBullet
