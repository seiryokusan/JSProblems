/**
 * Given two version numbers, version1 and version2, compare them.
 * Version numbers consist of one or more revisions joined by a dot '.'.
 * Each revision consists of digits and may contain leading zeros. Every revision contains at least one character.
 * Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on.
 * For example 2.5.33 and 0.1 are valid version numbers.
 * To compare version numbers, compare their revisions in left-to-right order.
 * Revisions are compared using their integer value ignoring any leading zeros.
 * This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0.
 * For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.
 * Return the following:
 * - If version1 < version2, return -1.
 * - If version1 > version2, return 1.
 * - Otherwise, return 0.
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let version1Revisions = version1.split(".");
    let version2Revisions = version2.split(".");

    let biggestLength = Math.max(version1Revisions.length, version2Revisions.length);

    for (let i = 0; i < biggestLength; i++) {
        if (Number(version1Revisions[i] || "0") < Number(version2Revisions[i] || "0")) {
            return -1;
        }
        if (Number(version1Revisions[i] || "0") > Number(version2Revisions[i] || "0")) {
            return 1;
        }
    }
    return 0;
};

console.log(compareVersion("1.6.0", "1.3.2.7.54")); //1
console.log(compareVersion("1.0.0", "1.0")); //0
console.log(compareVersion("3.0.0", "33.0")); //-1
console.log(compareVersion("1.01", "1.001")); //0
