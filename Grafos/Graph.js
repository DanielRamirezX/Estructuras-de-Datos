class Graph {
    constructor() {
        this.adjacencyList = {};
        this.nodes = 0;
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
        this.nodes++;
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].pop(vertex2);
        this.adjacencyList[vertex2].pop(vertex1);
        return this;
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length > 0) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            for(let i in this.adjacencyList[adjacentVertex]) {
                if(this.adjacencyList[adjacentVertex][i] === vertex) {
                    this.adjacencyList[adjacentVertex].splice(i, 1);
                }
            }
        }
        delete this.adjacencyList[vertex];
        this.nodes--;
        return this;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
