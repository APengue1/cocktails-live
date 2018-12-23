const Cocktail = require.main.require('./models/cocktail')

const Sugar = require.main.require('./models/ingredients/sugar')
const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Water = require.main.require('./models/ingredients/water')
const Cinnamon = require.main.require('./models/ingredients/cinnamon')
const Nutmeg = require.main.require('./models/ingredients/nutmeg')

class Bumbo extends Cocktail {
  constructor() {
    super([
      Sugar,
      WhiteRum,
      Water,
      Cinnamon,
      Nutmeg
    ])
  }
}

module.exports = Bumbo
