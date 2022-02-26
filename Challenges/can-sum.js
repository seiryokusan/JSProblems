// m = target sum, n = array length
// O(n^m) time
// O(m) space
const canSumBrute = (targetSum, numbers) => {
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
const canSumMemo = (targetSum, numbers, memo = {}) => {
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

//tabulation
// m = target sum, n = array length
// O(m*n) time
// O(m) space
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (const num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
};

console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false
