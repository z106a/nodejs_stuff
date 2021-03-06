// same as queue.
// implement 'weave' function. Weave receives two queues as arguments and combines
// the contents of each into a new, third queue.

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length-1];
  }
}

function weave(sourceOne, sourceTwo) {
  const q = new Queue();
  
  while(sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  
  return q;
}