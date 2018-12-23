const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Sugar = require.main.require('./models/ingredients/sugar')
const Lime = require.main.require('./models/ingredients/lime')
const CranberryJuice = require.main.require('./models/ingredients/cranberry_juice')
const Ice = require.main.require('./models/ingredients/ice')

class CultoALaVida extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Sugar,
      Lime,
      CranberryJuice,
      Ice
    ])
  }
}

module.exports = CultoALaVida
