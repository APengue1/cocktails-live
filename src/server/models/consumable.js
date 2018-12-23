const glob = require.main.require('./lib/glob');

class Consumable {
  name() {
    return this.constructor.name
  }

  all_json() {
    return this.consumable_files().map(consumable_file => {
      const consumable = new (require(consumable_file))()
      return consumable.json()
    })
  }

  consumable_files() {
    return glob(__dirname, this.consumable_files_pattern())
  }

  json() {
    return {
      name: this.name()
    }
  }
}

module.exports = Consumable
