/**
 * Question:
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
/**
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */
/**
 * For all strings, keep letter if all letters are identical.
 * If one letter is different, stop loop and return string.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i < Math.min(...strs.map(x => x.length)); i++) {
        if (strs.every(x => x[i] === strs[0][i])) {
            prefix += strs[0][i];
        } else {
            return prefix;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["", ""]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
