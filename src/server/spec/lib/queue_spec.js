const Queue = require.main.require('./lib/queue')

describe("Queue", () => {
  beforeEach(() => {
    this.subject = new Queue()
  })

  describe("#enqueue", () => {
    it("adds the parameter to the queue", () => {
      this.subject.enqueue('test1')
      expect(this.subject.dequeue()).toEqual('test1')
    })
  })

  describe("#dequeue", () => {
    describe("when the queue is not empty", () => {
      beforeEach(() => {
        this.subject.enqueue('test2')
      })
      it("returns the next object", () => {
        expect(this.subject.dequeue()).toEqual('test2')
      })
    })
  
    describe("when the queue is empty", () => {
      it("returns {}", () => {
        expect(this.subject.dequeue()).toEqual({})
      })
    })
  })
})
