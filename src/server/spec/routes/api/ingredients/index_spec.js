const Frisby = require('frisby');
const IngredientHelper = require.main.require('./spec/helpers/ingredient_helper')

describe('/', () => {
  beforeAll(() => {
    this.endpoint = `${require.main.base_url}/api/ingredients`
  })

  it("returns all ingredients", async () => {
    const res = await Frisby.get(this.endpoint)
    expect(res.json).toEqual({ ingredients: IngredientHelper.all_json })
  })
});
