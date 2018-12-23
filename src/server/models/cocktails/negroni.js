const Cocktail = require.main.require('./models/cocktail')

const Gin = require.main.require('./models/ingredients/gin')
const RedVermouth = require.main.require('./models/ingredients/red_vermouth')
const Campari = require.main.require('./models/ingredients/campari')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class Negroni extends Cocktail {
  constructor() {
    super([
      Gin,
      RedVermouth,
      Campari,
      Orange,
      Ice
    ])
  }
}

module.exports = Negroni
