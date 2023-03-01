const undirectedPat = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set())
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const hasPath = (graph, root, dst, visited) => {
    if (root === dst) return true;

    if(visited.has(root)) return false;

    visited.add(root)

    for (let neigbor of graph[root]) {
        if (hasPath(graph, neigbor, dst, visited)) {
            return true;
        }
    }

    return false;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

console.log(undirectedPat(edges, 'j', 'm'));