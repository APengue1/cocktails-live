class WebsocketService {
  constructor() {
    this.websockets = []
  }

  add_websocket(websocket) {
    this.websockets.push(websocket)
    websocket.on('close', () => this.remove_websocket(websocket))
  }

  send_message(message) {
    for(const ws of this.websockets) {
      ws.send(message)
    }
  }

  remove_websocket(websocket) {
    const websocket_index = this.websockets.indexOf(websocket)
    if(websocket_index >= 0) {
      this.websockets.splice(websocket_index, 1)
    }
  }
}

module.exports = new WebsocketService()
