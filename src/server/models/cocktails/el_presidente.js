const Cocktail = require.main.require('./models/cocktail')

const WhiteRum = require.main.require('./models/ingredients/white_rum')
const DryVermouth = require.main.require('./models/ingredients/dry_vermouth')
const TripleSec = require.main.require('./models/ingredients/triple_sec')
const Grenadine = require.main.require('./models/ingredients/grenadine')
const Orange = require.main.require('./models/ingredients/orange')
const Ice = require.main.require('./models/ingredients/ice')

class ElPresidente extends Cocktail {
  constructor() {
    super([
      WhiteRum,
      DryVermouth,
      TripleSec,
      Grenadine,
      Orange,
      Ice
    ])
  }
}

module.exports = ElPresidente
