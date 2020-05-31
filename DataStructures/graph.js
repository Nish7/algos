//Graphs
//Undirectied
//unwieighted graph stores using adjacency list

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(key) {
		//Check if the key exists if not add a an empty array
		if (!this.adjacencyList[key]) this.adjacencyList[key] = [];

		//if key already exists return false/undefined/
		return undefined;
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;

		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;

		this.adjacencyList[v1] = this.adjacencyList[v1].filter((x) => x !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((x) => x !== v1);
	}

	removeVertext(v) {
		if (!this.adjacencyList[v]) return;

		for (const edge of this.adjacencyList[v]) {
			this.removeEdge(v, edge);
		}

		delete this.adjacencyList[v];
	}

	dfs_recurisive(start) {
		// Vertex/v is the starting or root point
		let result = [];
		let visited = {};
		const list = this.adjacencyList;

		function dfs(vertext) {
			if (!vertext) return null;
			visited[vertext] = true;
			result.push(vertext);

			list[vertext].forEach((edge) => {
				if (!visited[edge]) return dfs(edge);
			});
		}

		dfs(start);
		return result;
	}

	dfs_iter(start) {
		let visited = {};
		let result = [];
		let S = [];
		let v;

		S.push(start);
		visited[start] = true;

		while (S.length) {
			v = S.pop();
			result.push(v);

			this.adjacencyList[v].forEach((edge) => {
				if (!visited[edge]) {
					visited[edge] = true;
					S.push(edge);
				}
			});
		}

		return result;
	}

	bfs_iter(v) {
		let q = [];
		let result = [];
		let visited = {};
		let curr;

		q.push(v);
		visited[v] = true;

		while (q.length) {
			curr = q.shift();
			result.push(curr);

			this.adjacencyList[curr].forEach((edge) => {
				if (!visited[edge]) {
					visited[edge] = true;
					q.push(edge);
				}
			});
		}

		return result;
	}
}

let grph = new Graph();
grph.addVertex('A');
grph.addVertex('B');
grph.addVertex('C');
grph.addVertex('D');
grph.addVertex('E');
grph.addVertex('F');

grph.addEdge('A', 'B');
grph.addEdge('A', 'C');
grph.addEdge('B', 'D');
grph.addEdge('C', 'E');
grph.addEdge('D', 'E');
grph.addEdge('D', 'F');
grph.addEdge('E', 'F');

console.log(grph.bfs_iter('A'));
