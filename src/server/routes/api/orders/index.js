const router = require('express').Router();
const Order = require.main.require('./models/order')
const order_service = require.main.require('./services/order_service')

router.use((req, res, next) => {
  req.order = Order.from_json(req.body.order)
  next()
})

router.post('/', (req, res) => {
  order_service.enqueue_order(req.order)
  res.json({ order: req.order });
});

router.put('/', (req, res) => {
  order_service.update_order(req.order)
  res.end();
});

module.exports = router;
