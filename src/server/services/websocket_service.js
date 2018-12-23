class WebsocketService {
  constructor() {
    this.websockets = []
  }

  add_websocket(websocket) {
    this.websockets.push(websocket)
  }

  send_message(message) {
    for(const ws of this.websockets) {
      ws.send(message)
    }
  }
}

module.exports = WebsocketService
