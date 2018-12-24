const router = require('express').Router();
const Order = require.main.require('./models/order')
const order_service = require.main.require('./services/order_service')

router.post('/', (req, res) => {
  const order = Order.from_json(req.body.order)
  order_service.enqueue_order(order)
  res.json({ order });
});

module.exports = router;
