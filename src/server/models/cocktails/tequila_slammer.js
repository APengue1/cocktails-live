const Cocktail = require.main.require('./models/cocktail')

const WhiteTequila = require.main.require('./models/ingredients/white_tequila')
const Sprite = require.main.require('./models/ingredients/sprite')

class TequilaSlammer extends Cocktail {
  constructor() {
    super([
      WhiteTequila,
      Sprite
    ])
  }
}

module.exports = TequilaSlammer
