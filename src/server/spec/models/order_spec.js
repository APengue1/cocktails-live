const Order = require.main.require('./models/order')

describe("Order", () => {
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
    this.subject = new Order(this.consumer_identity, this.cocktail)
  })

  describe("#constructor", () => {
    it("builds the order with given parameters", () => {
      expect(this.subject.consumer_identity).toEqual(this.consumer_identity)
      expect(this.subject.cocktail).toEqual(this.cocktail)
      expect(this.subject.state).toEqual(Order.QUEUED)
    })
  })

  describe("#state_queued", () => {
    it("puts the order in queued state", () => {
      this.subject.state_queued()
      expect(this.subject.state).toEqual(Order.QUEUED)
    })
  })

  describe("#state_progress", () => {
    it("puts the order in progress state", () => {
      this.subject.state_progress()
      expect(this.subject.state).toEqual(Order.PROGRESS)
    })
  })

  describe("#state_ready", () => {
    it("puts the order in ready state", () => {
      this.subject.state_ready()
      expect(this.subject.state).toEqual(Order.READY)
    })
  })

  describe("#equals", () => {
    describe("when not equal", () => {
      it("returns false", () => {
        const other_order = new Order()
        other_order.time = this.subject.time + 1
        expect(this.subject.equals(other_order)).toBe(false)
      })
    })
    describe("when equal", () => {
      it("returns true", () => {
        const other_order = new Order()
        other_order.time = this.subject.time
        expect(this.subject.equals(other_order)).toBe(true)
      })
    })
    describe("when not an order", () => {
      it("returns false", () => {
        const other_order = {}
        other_order.time = this.subject.time
        expect(this.subject.equals(other_order)).toBe(false)
      })
    })
  })
})
