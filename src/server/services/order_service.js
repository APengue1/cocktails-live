const Queue = require.main.require('./lib/queue')

class OrderService {
  constructor() {
    this.order_queue = new Queue()
  }

  enqueue_order(order) {
    this.order_queue.enqueue(order)
  }
}

module.exports = OrderService
