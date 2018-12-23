class Order {
  static get QUEUED()           { return "queued" }
  static get PROGRESS()      { return "in_progress" }
  static get READY() { return "ready_for_pickup" }

  constructor(consumer_identity, cocktail) {
    this.consumer_identity = consumer_identity
    this.cocktail = cocktail
    this.state_queued()
  }

  state_queued() {
    this.state = Order.QUEUED
  }

  state_progress() {
    this.state = Order.PROGRESS
  }

  state_ready() {
    this.state = Order.READY
  }
}

module.exports = Order
