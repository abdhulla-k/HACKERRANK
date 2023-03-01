const depthFirst = (graph, root) => {
    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neigbor of graph[current]) {
            stack.push(neigbor);
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirst(graph, 'a')