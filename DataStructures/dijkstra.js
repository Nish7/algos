// Dijkstra Algorithm

// Weighted Graph
class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addV(v) {
		if (!this.adjacencyList[v]) return (this.adjacencyList[v] = []);
		return undefined;
	}

	addE(v1, v2, w) {
		this.adjacencyList[v1].push({ node: v2, weight: w });
		this.adjacencyList[v2].push({ node: v1, weight: w });
	}
}

let graph = new WeightedGraph();
graph.addV('A');
graph.addV('B');
graph.addV('C');
graph.addV('D');
graph.addV('E');
graph.addV('F');
graph.addV('G');

graph.addE('A', 'B', 90);
graph.addE('A', 'G', 65);
graph.addE('B', 'C', 13);
graph.addE('C', 'D', 40);
graph.addE('D', 'E', 20);
graph.addE('E', 'F', 3);
graph.addE('F', 'G', 19);
graph.addE('B', 'F', 120);

console.log(graph);
