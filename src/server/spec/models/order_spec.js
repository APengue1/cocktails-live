const Order = require.main.require('./models/order')
const ABC = require.main.require('./models/cocktails/abc')

describe("Order", () => {
  describe("#constructor", () => {
    it("returns the customer identity", () => {
      const abc = new ABC()
      const subject = new Order("consumer_identity", abc)
      expect(subject.consumer_identity).toEqual("consumer_identity")
      expect(subject.cocktail).toEqual(abc)
    })
  })
})
