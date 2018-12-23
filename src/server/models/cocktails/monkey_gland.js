const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Grenadine = require.main.require('./models/ingredients/grenadine')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class MonkeyGland extends Cocktail {
  constructor() {
    super([
      Gin,
      OrangeJuice,
      Grenadine,
      Orange,
      Ice
    ])
  }
}

module.exports = MonkeyGland
