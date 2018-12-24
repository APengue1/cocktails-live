const order_service = require.main.require('./services/order_service')
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
    this.subject = order_service
    this.subject.orders = []
  })

  describe("#find_order_index", () => {
    beforeEach(() => {
      this.subject.enqueue_order(this.order)
    })
    describe("when the order is found", () => {
      it("returns the found order index", () => {
        const order_index = this.subject.find_order_index(this.order)
        expect(this.subject.orders[order_index]).toEqual(this.order)
      })
    })
    describe("when the order is not found", () => {
      it("returns -1", () => {
        const order_index = this.subject.find_order_index({})
        expect(order_index).toEqual(-1)
      })
    })
  })

  describe("#enqueue_order", () => {
    beforeEach(() => {
      this.subject.enqueue_order(this.order)
    })
    it("adds the order to the queue", () => {
      expect(this.subject.orders.shift()).toEqual(this.order)
    })
    it("puts the order in queued state", () => {
      expect(this.order.state).toEqual(Order.QUEUED)
    })
  })
})
