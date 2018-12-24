const Ingredient = require.main.require('./models/ingredient')
const IngredientHelper = require.main.require('./spec/helpers/ingredient_helper')

describe("Ingredient", () => {
  beforeEach( () => {
    this.subject =  new Ingredient()
  });
  describe("#all_json", () => {
    it("returns all ingredients", () => {
      const all_ingredients = this.subject.all_json()
      expect(all_ingredients).toEqual(IngredientHelper.all_json)
    })
  })
})
