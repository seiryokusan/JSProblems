/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */
//O(n^2) solution
const twoSum = (nums, target) => {
    if (nums.length === 2) return [0, 1];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//O(n) solution
var twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        const diff = target - num;

        if (diff in map) {
            return [map[diff], i];
        } else {
            map[nums[i]] = i;
        }
    }
};
