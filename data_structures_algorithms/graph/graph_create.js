class Graph {
  constructor() {
    this.graph = {};
  }

  // Function to add verteses to graph
  addVertex(vertex) {
    // Create if not exists
    if (!this.graph[vertex]) {
      this.graph[vertex] = new Set();
    }
  }

  // Function to add edge (connections)
  addEdge(vertex1, vertex2) {
    if (!this.graph[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.graph[vertex2]) {
      this.addVertex(vertex2);
    }

    this.graph[vertex1].add(vertex2);
    this.graph[vertex2].add(vertex1);
  }

  // Function to add display graph
  display() {
    for (let vertex in this.graph) {
      console.log(`${vertex}  =>  ${[...this.graph[vertex]]}`);
    }
  }

  // Function to check has connection 
  hasEdge(vertex1, vertex2) {
    return (
      this.graph[vertex1].has(vertex2) &&
      this.graph[vertex2].has(vertex1)
    )
  }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

graph.display();

console.log(graph.hasEdge('C', 'B'));