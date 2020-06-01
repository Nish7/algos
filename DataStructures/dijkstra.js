// Dijkstra Algorithm

//Priority Queque
class priorityQ {
	constructor() {
		this.val = [];
	}

	enq(val, priority) {
		this.val.push({ val, priority });
		this.sort();
	}

	deq() {
		return this.val.shift();
	}

	sort() {
		this.val.sort((a, b) => a.priority - b.priority);
	}
}

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

	djlk(startV, endV) {
		let distances = {};
		let pq = new priorityQ();
		let path = [];
		let prev = {};

		for (let key in this.adjacencyList) {
			if (key === startV) {
				distances[key] = 0;
				pq.enq(key, 0);
			} else {
				distances[key] = Infinity;
				pq.enq(key, Infinity);
			}

			prev[key] = null;
		}

		let curr;

		while (pq.val.length) {
			curr = pq.deq().val;
			if (curr == endV) {
				while (prev[curr]) {
					path.push(curr);
					curr = prev[curr];
				}

				break;
			}

			if (curr || distances[curr] !== Infinity) {
				for (let key in this.adjacencyList[curr]) {
					let next = this.adjacencyList[curr][key];
					let cand = distances[curr] + next.weight;

					if (cand < distances[next.node]) {
						distances[next.node] = cand;
						prev[next.node] = curr;
						pq.enq(next.node, cand);
					}
				}
			}
		}

		console.log(distances[endV] + 'KM');
		return path.concat(startV).reverse();
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

console.log(graph.djlk('A', 'E'));
