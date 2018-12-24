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

  describe("#find_order", () => {
    beforeEach(() => {
      this.subject.enqueue_order(this.order)
    })
    describe("when the order is found", () => {
      it("returns the found order", () => {
        const order = this.subject.find_order(this.order)
        expect(order).toEqual(this.order)
      })
    })
    describe("when the order is not found", () => {
      it("returns the order to find", () => {
        const order = this.subject.find_order({})
        expect(order).toEqual({})
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

  describe("#progress_order", () => {
    beforeEach(() => {
      this.subject.enqueue_order(this.order)
      this.subject.progress_order(this.order)
    })
    it("puts the order in progress state", () => {
      expect(this.order.state).toEqual(Order.PROGRESS)
    })
  })

  describe("#ready_order", () => {
    beforeEach(() => {
      this.subject.enqueue_order(this.order)
      this.subject.ready_order(this.order)
    })
    it("puts the order in ready state", () => {
      expect(this.order.state).toEqual(Order.READY)
    })
  })
})
