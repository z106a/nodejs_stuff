const L = require('./index');
const List = L.LinkedList;
const Node = L.Node;

test('List is a class', () => {
  expect(typeof List.prototype.constructor).toEqual(List);
});
test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual(Node);
});

describe('A Node', () => {
  test('has properties "data" and "next"', () => {
    const node = new Node('a', 'b');
    expect(node.data).toEqual('a');
    expect(node.next).toEqual('b');
  });
});
describe('Insert First', () => {
  test('appends a node to the start of the list', () => {
    const l = new List();
    l.insertFirst(1);
    expect(l.head.data).toEqual(1);
    l.insertFirst(2);
    expect(l.head.data).toEqual(2);  
  });
});