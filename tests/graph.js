const assert = require('assert');
const Graph = require('../graph/').Graph;
describe('Graph', () => {
  it('should use Graph', () => {
    const friends = new Graph();
    
    friends.addNode('John Doe');
    friends.addNode('Jack D');
    friends.addNode('Jim Morgan');

    assert.equal(friends.hasNode('John Doe'), true);

    friends.addEdge('John Doe', 'Jack D');
    friends.addEdge('John Doe', 'Jim Morgan');
    assert.equal(friends.hasEdge('Jack D', 'John Doe'), true);

    friends.removeEdge('John Doe', 'Jack D');
    assert.equal(friends.hasEdge('John Doe', 'Jack D'), false);

    friends.removeNode('Jack D');
    assert.equal(friends.hasNode('Jack D'), false);
  });
});