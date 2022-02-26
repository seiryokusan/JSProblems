// m = target sum, n = array length
// O(n^m * m) time
// O(m) space
const howSumBrute = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSumBrute(remainder, numbers);
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
const howSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    if (targetSum in memo) return memo[targetSum];

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSumMemo(remainder, numbers);
        if (!remainderResult) {
            memo[targetSum] = remainderResult.concat(num);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};

//tabulation
// m = target sum, n = array length
// O(m^2*n) time
// O(m^2) space
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (const num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }
    return table[targetSum];
};

console.log(canSum(7, [5, 3, 4, 7])); //[3,2,2]
console.log(canSum(7, [2, 3])); //[4,3]
console.log(canSum(7, [2, 4])); //null
console.log(canSum(8, [2, 3, 5])); //[2,2,2,2]
console.log(canSum(300, [7, 14])); //null
