//base recursive fn O(2^n)
const fibSlow = n => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

// memoization
//    js object, keys will be args to fn, value will be return value
//Down to O(n)
const fibMemo = (n, memo = {}) => {
    if (n <= 2) return 1;
    if (n in memo) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

//tabulation
//O(n) time
//O(n) space
const fib = n => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
