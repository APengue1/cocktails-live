const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const GrapefruitJuice = require.main.require('./models/ingredients/grapefruit_juice')
const Ice = require.main.require('./models/ingredients/ice')
const Lemon = require.main.require('./models/ingredients/lemon')

class Greyhound extends Cocktail {
  constructor() {
    super([
      Gin,
      GrapefruitJuice,
      Ice,
      Lemon
    ])
  }
}

module.exports = Greyhound
