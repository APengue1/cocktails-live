const Cocktail = require.main.require('./models/cocktail')

const Whiskey = require.main.require('./models/ingredients/whiskey')
const Lemon = require.main.require('./models/ingredients/lemon')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Grenadine = require.main.require('./models/ingredients/grenadine')
const Cherry = require.main.require('./models/ingredients/cherry')
const Ice = require.main.require('./models/ingredients/ice')

class Ward extends Cocktail {
  constructor() {
    super([
      Whiskey,
      Lemon,
      OrangeJuice,
      Grenadine,
      Cherry,
      Ice
    ])
  }
}

module.exports = Ward
