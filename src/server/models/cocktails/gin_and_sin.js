const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const OrangeJuice = require.main.require('./models/ingredients/orange_juice')
const Lemon = require.main.require('./models/ingredients/lemon')
const Grenadine = require.main.require('./models/ingredients/grenadine')
const Ice = require.main.require('./models/ingredients/ice')

class GinAndSin extends Cocktail {
  constructor() {
    super([
      Gin,
      OrangeJuice,
      Lemon,
      Grenadine,
      Ice
    ])
  }
}

module.exports = GinAndSin
