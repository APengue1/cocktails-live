const Order = require.main.require('./models/order')

describe("Order", () => {
  describe("#constructor", () => {
    it("returns the customer identity", () => {
      const consumer_identity = 'consumer_identity'
      const cocktail = {
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
      const subject = new Order(consumer_identity, cocktail)
      expect(subject.consumer_identity).toEqual(consumer_identity)
      expect(subject.cocktail).toEqual(cocktail)
    })
  })
})
