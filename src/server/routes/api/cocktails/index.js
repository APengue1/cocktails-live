const router = require('express').Router();
const Cocktail = require.main.require('./models/cocktail')

const cocktail_all_json = (new Cocktail()).all_json()

router.get('/', (req, res) => {
  res.json({ cocktails: cocktail_all_json });
});

module.exports = router;
