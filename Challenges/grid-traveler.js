//O(2^n+m) time
//O(n+m) space
const gridTravelerBrute = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//memoization
//O(m*n) time
//O(n+m) space
const gridTravelerMemo = (m, n, memo = {}) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    const key = `${m},${n}`;
    if (key in memo) return memo[key];
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

//Memoization Recipe
//1. Make it work. (Brute force)
//1.1. Visualize the tree.
//1.2. Implement the tree with recursion
//1.3. Test it.

//2. Make it efficient.
//2.1 Add a memo object (key, value)
//2.2 Add a base case to return memo value
//2.3 Store return values in the memo

//tabulation
//O(m*n) time
//O(m*n) space
const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (i + 1 <= m) table[i + 1][j] += current;
            if (j + 1 <= n) table[i][j + 1] += current;
        }
    }
    return table[m][n];
};

//tabulation recipe
//Visualize the problem as a table
//Size the table based on the inputs
//Inialize the table with default values
//seed the trivial answer into the table
//fill further positions based on the current position

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(15, 18));
