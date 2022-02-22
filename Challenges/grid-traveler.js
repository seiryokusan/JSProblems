//O(2^n+m) time
//O(n+m) space
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//memoization
//O(m*n) time
//O(n+m) space
const gridTraveler = (m, n, memo = {}) => {
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
