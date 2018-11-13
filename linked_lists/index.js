// see 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }
  size() {
    let sum = 0;
    let node = this.head;
    while (node) {
      sum++;
      node = node.next;
    }
    return sum;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
     this.head = null;
  }
  removeFirst() {
    if (!this.head) { return; }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) { return; }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  insertLast(item) {
    const node = new Node(item);
    if (!this.head) { this.head = node; return; }
    const last = this.getLast();
    last.next = node;
  }
  getAt(idx) {
    if (!this.head || this.size() < idx) { return null; }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
  }
  removeAt(idx) {
    if (!this.head) { return null; }
    if (idx === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(idx - 1);
    if (!prev || !prev.next) { return; }
    prev.next = prev.next.next;
  }
  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(idx - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }

}

const list = new LinkedList();
const nodeOne = new Node(5);
list.head = nodeOne;
list.insertFirst(15);
console.log(list.getAt(3));
module.exports = { Node, LinkedList };
