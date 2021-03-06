const websocket_service = require.main.require('./services/websocket_service')

describe("WebsocketService", () => {
  beforeEach(() => {
    this.subject = websocket_service
    this.subject.websockets = []
    this.ws = jasmine.createSpyObj('ws', ['send', 'on']);
  })

  describe("#add_websocket", () => {
    beforeEach(() => this.subject.add_websocket(this.ws))
    it("adds the websocket to its list of websockets", () => {
      expect(this.subject.websockets.shift()).toEqual(this.ws)
    })
    it("registers the on_close handler", () => {
      expect(this.ws.on).toHaveBeenCalledWith('close', jasmine.any(Function))
    })
  })

  describe("remove_websocket", () => {
    beforeEach(() => {
      this.subject.add_websocket(this.ws)
      this.subject.remove_websocket(this.ws)
    })
    it("removes the websocket from its list of websockets", () => {
      expect(this.subject.websockets.length).toEqual(0)
    })
  })

  describe("#send_message", () => {
    beforeEach(() => {
      this.subject.add_websocket(this.ws)
    })
    it("sends the given message to all websockets", () => {
      const message = { message: "message" }
      this.subject.send_message(message)
      expect(this.ws.send).toHaveBeenCalledWith(message)
    })
  })
})
