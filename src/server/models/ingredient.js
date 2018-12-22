const Base = require.main.require('./models/base')

class Ingredient extends Base {
  model_files_pattern() {
    return 'ingredients/*.js'
  }
}

module.exports = Ingredient
