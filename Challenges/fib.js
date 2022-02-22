// memoization
//    js object, keys will be args to fn, value will be return value
//Down to O(n)
const fib = (n, memo = {}) => {
    if (n <= 2) return 1;
    if (n in memo) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

//base recursive fn O(2^n)
const fib = n => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};
