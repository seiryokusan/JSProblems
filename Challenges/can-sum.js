// m = target sum, n = array length
// O(n^m) time
// O(m) space
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (const num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers)) {
            return true;
        }
    }
    return false;
};

//memoization
// m = target sum, n = array length
// O(n * m) time
// O(m) space
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    if (targetSum in memo) return memo[targetSum];

    for (const num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};
