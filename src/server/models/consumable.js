const glob = require.main.require('./lib/glob');

class Consumable {
  name() {
    return this.constructor.name
  }

  all_json() {
    return this.consumable_files().map(consumable_file => {
      const consumable = new (require(consumable_file))()
      return {
        name: consumable.name()
      }
    })
  }

  consumable_files() {
    return glob(__dirname, this.consumable_files_pattern())
  }
}

module.exports = Consumable
