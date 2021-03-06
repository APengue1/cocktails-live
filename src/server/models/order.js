class Order {
  static get QUEUED()           { return "queued" }
  static get PROGRESS()      { return "in_progress" }
  static get READY() { return "ready_for_pickup" }

  constructor(consumer_identity, cocktail, time=Date.now()) {
    this.consumer_identity = consumer_identity
    this.cocktail = cocktail
    this.time = time
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

  equals(other_order) {
    return other_order instanceof Order && other_order.time === this.time
  }

  static from_json(order_json) {
    const order = new Order(
      order_json.consumer_identity,
      order_json.cocktail,
      order_json.time
    )
    order.state = order_json.state
    return order
  }
}

module.exports = Order
