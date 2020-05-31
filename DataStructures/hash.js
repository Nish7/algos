// Hash function

//Seperate Chaining
class hasher {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let prime = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let val = char.charCodeAt(0) - 96;
			total = (total * prime + val) % this.keyMap.length;
		}
		return total;
	}

	set(key, val) {
		let pos = this._hash(key);

		if (!this.keyMap[pos]) {
			this.keyMap[pos] = [];
		}

		this.keyMap[pos].push([key, val]);
	}

	//Enter the key return the value of that particular key
	get(key) {
		// hello
		//Hash will return a  numeric value of the string ex. 'hello' --> 5
		let hash = this._hash(key); // 5

		//Take that 5 and compare in the arrya with the key (param)
		if (!this.keyMap[hash]) {
			return undefined;
		}

		// [['yello', '#ff'], ['red','#rr']]

		for (var i = 0; i < this.keyMap[hash].length; i++) {
			if (this.keyMap[hash][i][0] === key) {
				return this.keyMap[hash][i][1];
			}
		}
	}

	// [[[1,1],[2,2]],[2,2]]

	//Get all the keys (values)
	getKeys() {
		let keys = [];
		for (var i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (var j = 0; j < this.keyMap[i].length; j++) {
					keys.push(this.keyMap[i][j][0]);
				}
			}
		}

		return keys;
	}

	getVal() {
		let val = [];
		for (var i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (var j = 0; j < this.keyMap[i].length; j++) {
					val.push(this.keyMap[i][j][1]);
				}
			}
		}

		return val;
	}
}

let hashs = new hasher(13);
hashs.set('cyan', '#fqfff');
hashs.set('yellow', '#fqfff');
hashs.set('red', '#ffeqff');
hashs.set('blue', '#ffasff');
hashs.set('green', '#33131');
console.log(hashs.getVal());
