const Cocktail = require.main.require('./models/cocktail')

const Grenadine = require.main.require('./models/ingredients/grenadine')
const Vodka = require.main.require('./models/ingredients/vodka')
const Tabasco = require.main.require('./models/ingredients/tabasco')

class Boyarskiy extends Cocktail {
  constructor() {
    super([
      Grenadine,
      Vodka,
      Tabasco
    ])
  }
}

module.exports = Boyarskiy
