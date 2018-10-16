// Implement a Queue datastructure using two stacks.
const Stack = require('./stack');

class Queue {
  constructor() {
    this.A = new Stack();
    this.B = new Stack();
  }
  add(item) {
    this.A.push(item);
  }
  remove() {
    while(this.A.peek()) {
      const item = this.A.pop();
      this.B.push(item);
    }
    
    const neededRecord = this.B.pop();

    while(this.B.peek()) {
      this.A.push(this.B.pop());
    }

    return neededRecord;
  }

  peek() {
    while(this.A.peek()) {
      const item = this.A.pop();
      this.B.push(item);
    }
    
    const neededRecord = this.B.peek();

    while(this.B.peek()) {
      this.A.push(this.B.pop());
    }

    return neededRecord;
  }

}

module.exports = Queue;
