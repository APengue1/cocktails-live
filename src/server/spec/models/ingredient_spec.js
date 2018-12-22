const subject = require.main.require('./models/ingredient')

describe("Ingredient", () => {
  describe(".all_json", () => {
    it("returns all ingredients", () => {
      const all_ingredients = subject.all_json()
      expect(all_ingredients).toEqual(
        [
          { name: "Amaretto" },
          { name: "Baileys" },
          { name: "Bourbon" },
          { name: "Brandy" },
          { name: "Campari" },
          { name: "Cherry" },
          { name: "Cinnamon" },
          { name: "Cognac" },
          { name: "Cola" },
          { name: "CranberryJuice" },
          { name: "DarkRum" },
          { name: "DryVermouth" },
          { name: "Gin" },
          { name: "GingerAle" },
          { name: "GoldTequila" },
          { name: "Goldschlager" },
          { name: "GrapefruitJuice" },
          { name: "Grenadine" },
          { name: "Honey" },
          { name: "Ice" },
          { name: "Kahlua" },
          { name: "Lemon" },
          { name: "Lime" },
          { name: "Mint" },
          { name: "Nutmeg" },
          { name: "Olive" },
          { name: "OrangeJuice" },
          { name: "Orange" },
          { name: "Peach" },
          { name: "PineappleJuice" },
          { name: "RedVermouth" },
          { name: "RedWine" },
          { name: "Salt" },
          { name: "Sambuca" },
          { name: "Soda" },
          { name: "SparklingWine" },
          { name: "Sprite" },
          { name: "Stout" },
          { name: "Strawberry" },
          { name: "Sugar" },
          { name: "Tabasco" },
          { name: "Tonic" },
          { name: "TripleSec" },
          { name: "Vodka" },
          { name: "Water" },
          { name: "Whiskey" },
          { name: "WhiteRum" },
          { name: "WhiteTequila" },
        ]
      )
    })
  })
})
