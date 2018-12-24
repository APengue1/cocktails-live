const Frisby = require('frisby');
const order_service = require.main.require('./services/order_service')

describe('/', () => {
  beforeEach(() => {
    this.endpoint = `http://${require.main.base_url}/api/orders`
      this.payload = {
        order: {
          consumer_identity: "consumer_identity",
          cocktail: "cocktail"
        }
      }
    order_service.orders = []
    })

  describe("POST", () => {
    it("creates and adds the order to the OrderService", async () => {
      const res = await Frisby.post(this.endpoint, this.payload)
      expect(res.json.order.consumer_identity).toEqual(this.payload.order.consumer_identity)
      expect(res.json.order.cocktail).toEqual(this.payload.order.cocktail)
      expect(res.json.order.time).toBeGreaterThan(0)

      const created_order = order_service.orders.shift()
      expect(created_order.consumer_identity).toEqual(this.payload.order.consumer_identity)
      expect(created_order.cocktail).toEqual(this.payload.order.cocktail)
    })
  })
});
