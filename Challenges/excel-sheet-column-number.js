/**Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number. */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let out = 0;
    let len = columnTitle.length;
    for (i = 0; i < len; i++) {
        out += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, len - i - 1);
    }
    return out;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
