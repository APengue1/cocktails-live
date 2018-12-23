const Cocktail = require.main.require('./models/cocktail')

const Bourbon = require.main.require('./models/ingredients/bourbon')
const Cola = require.main.require('./models/ingredients/cola')
const Ice = require.main.require('./models/ingredients/ice')

class JackAndCoke extends Cocktail {
  constructor() {
    super([
      Bourbon,
      Cola,
      Ice
    ])
  }
}

module.exports = JackAndCoke
