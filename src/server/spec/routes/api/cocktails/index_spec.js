const Frisby = require('frisby');
const CocktailHelper = require.main.require('./spec/helpers/cocktail_helper')

describe('/', () => {
  beforeAll(() => {
    this.endpoint = `http://${require.main.base_url}/api/cocktails`
  })

  it("returns all cocktails", async () => {
    const res = await Frisby.get(this.endpoint)
    expect(res.json).toEqual({ cocktails: CocktailHelper.all_json })
  })
});
