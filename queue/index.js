// The queue should be a class with methods 'add' and 'remove'

class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }
  remove() { //
    this.data.pop();
  }
}

module.exports = Queue;