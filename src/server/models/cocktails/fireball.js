const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const Goldschlager = require.main.require('./models/ingredients/goldschlager')
const Tabasco = require.main.require('./models/ingredients/tabasco')
const Ice = require.main.require('./models/ingredients/ice')

class Fireball extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      Goldschlager,
      Tabasco,
      Ice
    ])
  }
}

module.exports = Fireball
