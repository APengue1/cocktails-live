const WebsocketService = require.main.require('./services/websocket_service')

describe("WebsocketService", () => {
  beforeEach(() => {
    this.subject = new WebsocketService()
    this.ws = jasmine.createSpyObj('ws', ['send']);
  })

  describe("#add_websocket", () => {
    it("adds the websocket to its list of websockets", () => {
      this.subject.add_websocket(this.ws)
      expect(this.subject.websockets.shift()).toEqual(this.ws)
    })
  })

  describe("#send_message", () => {
    beforeEach(() => {
      this.subject.add_websocket(this.ws)
    })
    it("sends the given message to all websockets", () => {
      const message = { message: "message" }
      this.subject.send_message(message)
      expect(this.ws.send).toHaveBeenCalledWith(message);
    })
  })
})
