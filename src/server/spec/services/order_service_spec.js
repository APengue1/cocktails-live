const OrderService = require.main.require('./services/order_service')
const Order = require.main.require('./models/order')

describe("OrderService", () => {
  beforeEach(() => {
    this.consumer_identity = "consumer_identity"
    this.cocktail = {
      "name": "AmarettoSour",
      "ingredients": [
        {
          "name": "Amaretto"
        },
        {
          "name": "Lemon"
        },
        {
          "name": "Ice"
        }
      ]
    }
    this.order = new Order(this.consumer_identity, this.cocktail)
    this.subject = new OrderService()
  })

  describe("#enqueue_order", () => {
    beforeEach(() => {
      this.subject.enqueue_order(this.order)
    })
  
    it("adds the order to the queue", () => {
      expect(this.subject.order_queue.dequeue()).toEqual(this.order)
    })
  })
})
