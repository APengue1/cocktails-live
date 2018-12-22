const subject = require.main.require('./models/ingredient')

describe("Ingredient", () => {
  describe(".all_json", () => {
    it("returns all ingredients", () => {
      const all_ingredients = subject.all_json()
      expect(all_ingredients).toEqual(
        [
          {
            name: "7-Up"
          }
        ]
      )
    })
  })
})
