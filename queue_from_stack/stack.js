class Stack {
  constructor() {
    this.data = [];
  }
  push(item) {
    this.data.push(item);
  }
  pop() {
    return this.data.this.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;