class OrderService {
  constructor() {
    this.orders = []
  }

  enqueue_order(order) {
    order.state_queued()
    this.orders.push(order)
  }

  progress_order(order) {
    this.find_order(order).state_progress()
  }

  ready_order(order) {
    this.find_order(order).state_ready()
  }

  find_order(order_to_find) {
    const found_order = this.orders.find(order => order.equals(order_to_find))
    return found_order ? found_order : order_to_find
  }
}

module.exports = OrderService
