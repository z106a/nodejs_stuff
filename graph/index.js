class Graph {
  constructor() {
    this._nodes = {};
  }

  hasNode(value) {
    return !!this._nodes[value];
  }
  hasEdge(nodeFrom, nodeTo) {
    return !!this._nodes[nodeFrom].edges[nodeTo];
  }

  addNode(value) {
    this._nodes[value] = {
      edges: {}
    }
  }
  addEdge(nodeFrom, nodeTo) {
    if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
      this._nodes[nodeFrom].edges[nodeTo] = 
      this._nodes[nodeTo].edges[nodeFrom] = true;
    }
  }
  removeNode(value) {
    for (let connectedNode in this._nodes[value].edges){
      this.removeEdge(value, connectedNode);
    }
    delete this._nodes[value];
  }

  removeEdge(nodeFrom, nodeTo) {
    if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
      delete this._nodes[nodeFrom].edges[nodeTo];
      delete this._nodes[nodeTo].edges[nodeFrom];
    }
  }

}

module.exports = {
  Graph
}