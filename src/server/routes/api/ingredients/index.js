const router = require('express').Router();
const Ingredient = require.main.require('./models/ingredient')

const ingredient_all_json = (new Ingredient()).all_json()

router.get('/', (req, res) => {
  res.json({ ingredients: ingredient_all_json });
});

module.exports = router;
