class WebsocketService {
  constructor() {
    this.websockets = []
  }

  add_websocket(websocket) {
    this.websockets.push(websocket)
    this.register_websocket_events(websocket)
  }

  send_message(message) {
    for(const ws of this.websockets) {
      ws.send(message)
    }
  }

  register_websocket_events(websocket) {
    websocket.on('close', () => this.remove_websocket(websocket))
  }

  remove_websocket(websocket) {
    const websocket_index = this.websockets.indexOf(websocket)
    if(websocket_index >= 0) {
      this.websockets.splice(websocket_index, 1)
    }
  }
}

module.exports = new WebsocketService()
