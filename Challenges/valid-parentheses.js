/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isExpressionValid = function (s) {
    for (const bracket of s) {
        if (["[", "{", "("].includes(bracket)) {
        }
    }
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("[()]"));
console.log(isValid("[({})]"));
