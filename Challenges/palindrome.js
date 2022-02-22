/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = x.toString();
    if (str.length === 1) return true;
    const halfNumber = str.length % 2 === 0 ? str.length / 2 : str.length / 2 - 1;
    for (let index = 0; index < halfNumber; index++) {
        console.log(index, str[index], str.length - index, str[str.length - 1 - index]);
        if (str[index] !== str[str.length - 1 - index]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1));
console.log(isPalindrome(-1));
console.log(isPalindrome(123454321));
console.log(isPalindrome(1234554321));
console.log(isPalindrome(1000030001));

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeSlow = function (x) {
    let reverse = "";
    for (const char of x.toString()) {
        reverse = char + reverse;
    }
    return !!(x.toString() === reverse);
};
