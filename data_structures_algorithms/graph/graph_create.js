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

  // Function to delete edges
  removeEdge(vertex1, vertex2) {
    this.graph[vertex1].delete(vertex2);
    this.graph[vertex2].delete(vertex1);
  }

  // Function to delete a vertex
  removeVertex(vertex) {
    if (!this.graph[vertex]) {
      return;
    }

    for (let edge of this.graph[vertex]) {
      this.removeEdge(edge, vertex);
    }

    delete this.graph[vertex];
  }

  // BFS => one of travesing method
  bfs(vertex) {
    const result = [];
    const visited = {};
    const queue = [];

    queue.push(vertex);
    visited[vertex] = true;

    while(queue.length) {
      const current = queue.shift();
      result.push(current);
      
      for(let vertex of this.graph[current]) {
        if(!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      }
    }

    return result;
  }

  // To handle disconnected vertices
  bfsForAll() {
    const results = [];
    const visited = {};
    const allKeys = Object.keys(this.graph);

    for(let vertex of allKeys) {
      if(!visited[vertex]) {
        const result = this.bfs(vertex);
        results.push(...result);
        results.forEach((vertex) => {
          visited[vertex] = true;
        })
      }
    }

    return results;
  }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('B', 'E');

graph.display();

console.log(graph.hasEdge('C', 'B'));

// graph.removeEdge('A', 'B');
// graph.display();

// console.log('----------------');
// graph.removeVertex('A');
// graph.display();

console.log(graph.bfsForAll());