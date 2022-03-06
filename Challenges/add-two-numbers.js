/**
 * Question:
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Examples:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */

/** Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * Add the first two numbers of the chain.
 * If the number is bigger than 10, keep 10 in memory and add the remainder to the return chain.
 * If there is a 10 available, add 1 to next addition.
 * Loop on both chains until the longest chain is finished.
 * If undefined, assume 0.
 * return the final chain
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let addedList;
    let tenWaiting = false;
    while (l1.next !== null && l2.next !== null) {
        const sum = l1.val + l2.val;
        if (sum > 9) {
            tenWaiting = true;
            sum -= 10;
        }
        if (addedList === undefined) {
            addedList = new ListNode(sum);
        } else {
            addedList.next = new ListNode(sum);
            addedList = addedList.next;
        }
    }
    return addedList;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
