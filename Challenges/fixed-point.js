/**
 * Given an array of distinct integers arr, where arr is sorted in ascending order, return the smallest index i that satisfies arr[i] == i.
 * If there is no such index, return -1.
 */
var fixedPoint = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === i) {
            return i;
        }
    }
    return -1;
};
