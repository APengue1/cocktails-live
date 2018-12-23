class Queue {
  constructor() {
    this.queue = []
  }
  
  enqueue(x) {
    this.queue.push(x)
  }

  dequeue() {
    let next = this.queue.shift()
    if(next === undefined) {
      next = {}
    }
    return next
  }
}

module.exports = Queue
