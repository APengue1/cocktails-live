class OrderService {
  constructor() {
    this.orders = []
  }

  update_order(updated_order) {
    const order_index = this.find_order_index(updated_order)  
    if(order_index >= 0) {
      this.orders[order_index] = updated_order
    }
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

  find_order_index(order_to_find) {
    return this.orders.findIndex(order => order.time === order_to_find.time)
  }
}

module.exports = new OrderService()
