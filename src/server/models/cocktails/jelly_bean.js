const Cocktail = require.main.require('./models/cocktail')

const Grenadine = require.main.require('./models/ingredients/grenadine')
const Sambuca = require.main.require('./models/ingredients/sambuca')
const Bourbon = require.main.require('./models/ingredients/bourbon')

class JellyBean extends Cocktail {
  constructor() {
    super([
      Grenadine,
      Sambuca,
      Bourbon
    ])
  }
}

module.exports = JellyBean
