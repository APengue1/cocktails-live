const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const GrapefruitJuice = require.main.require('./models/ingredients/grapefruit_juice')
const Salt = require.main.require('./models/ingredients/salt')
const Ice = require.main.require('./models/ingredients/ice')

class SaltyDog extends Cocktail {
  constructor() {
    super([
      Gin,
      GrapefruitJuice,
      Salt,
      Ice
    ])
  }
}

module.exports = SaltyDog
