const Cocktail = require.main.require('./models/cocktail')
const CocktailHelper = require.main.require('./spec/helpers/cocktail_helper')

describe("Cocktail", () => {
  beforeEach( () => {
    this.subject =  new Cocktail()
  });
  describe("#all_json", () => {
    it("returns all cocktails", () => {
      const all_cocktails = this.subject.all_json()
      expect(all_cocktails).toEqual(CocktailHelper.all_json)
    })
  })
})
