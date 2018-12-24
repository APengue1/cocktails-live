const router = require('express').Router();
const websocket_service = require.main.require('./services/websocket_service')

router.ws('/', (ws) => {
  websocket_service.add_websocket(ws)
});

module.exports = router;
