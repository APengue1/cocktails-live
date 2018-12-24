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

  find_order_index(order_to_find) {
    return this.orders.findIndex(order => order.time === order_to_find.time)
  }
}

module.exports = new OrderService()
