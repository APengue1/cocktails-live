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
    it("returns the customer identity", () => {
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
})
