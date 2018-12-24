const Websocket = require('ws')
const websocket_service = require.main.require('./services/websocket_service')

describe('/', () => {
  beforeEach(() => {
    this.endpoint = `ws://${require.main.base_url}/ws`
    this.ws = new Websocket(this.endpoint)
    this.websocket_service = websocket_service
    this.websocket_service.websockets = []
  })

  it("adds the websocket to the WebsocketService", (done) => {
    this.ws.on('open', () => {
      expect(this.websocket_service.websockets.length).toEqual(1)
      done()
    })
  })
});
