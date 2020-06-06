function fibCompare(n) {
	console.time(); // For Execution time

	// Colts Approach
	function MemoSlashFib(n, memo = []) {
		let count;
		count++;
		console.log(memo, count);
		if (memo[n] !== undefined) return memo[n];
		if (n <= 2) return 1;

		let res = MemoSlashFib(n - 1, memo) + MemoSlashFib(n - 2, memo);
		memo[n] = res;
		return res;
	}

	console.log(MemoSlashFib(n));

	console.timeEnd();

	console.time();

	function fib(n) {
		if (n <= 2) return 1;
		let res = fib(n - 1) + fib(n - 2);
		return res;
	}

	// Big O --> O(2^n );

	console.log(fib(n));

	console.timeEnd();
}

fibCompare(50);

// Refactored Nishil (Memoization may lead to prob of maximum call stack sol: Tabulation)
let count = 0;
let memo = [0, 1, 1];
function MemoSlashFib(n) {
	// console.log(memo, n);
	if (memo[n]) return memo[n];
	let res = MemoSlashFib(n - 1) + MemoSlashFib(n - 2);
	memo[n] = res;
	return res;
}

// Big O --> O(n);
MemoSlashFib(5);
console.log(memo);

// Tabluation

console.time();
function tabFib(n) {
	if (n <= 2) return 1;
	let fib = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
		console.log(fib);
	}

	return fib[n];
}

console.log(tabFib(5));
console.timeEnd();
