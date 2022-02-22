/**
 * Given an array and a number k where k is smaller than the size of the array,
 * we need to find the k’th smallest element in the given array.
 * It is given that all array elements are distinct.
 */

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
 */
class Solution {
    kthSmallest(arr, l, r, k) {
        return arr.sort((a, b) => a - b)[k - 1];
    }
}
