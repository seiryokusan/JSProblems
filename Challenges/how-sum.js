// m = target sum, n = array length
// O(n^m * m) time
// O(m) space
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (!remainderResult) {
            return remainderResult.concat(num);
        }
    }
    return null;
};

// memoized
// m = target sum, n = array length
// O(m*n^2) time
// O(m^2) space
const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    if (targetSum in memo) return memo[targetSum];

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (!remainderResult) {
            memo[targetSum] = remainderResult.concat(num);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
