const glob = require.main.require('./lib/glob');

class Base {
  name() {
    return this.constructor.name
  }

  all_json() {
    return this.model_files().map(model_file => {
      const model = new (require(model_file))()
      return {
        name: model.name()
      }
    })
  }

  model_files() {
    return glob(__dirname, this.model_files_pattern())
  }
}

module.exports = Base
