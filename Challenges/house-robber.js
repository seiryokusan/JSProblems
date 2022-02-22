/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
    if (nums.length <= 2) {
        return Math.max(nums);
    }
    let bestMoneys = 0;
    for (let index = 0; index < nums.length; index++) {
        const housesLeft = nums.splice(Math.max(0, index - 1), Math.min(index + 1, nums.length));
        if (housesLeft.length > 0) {
            const houseLeftMoney = rob(housesLeft);
            bestMoneys += houseLeftMoney;
        }
    }
    return bestMoneys;
};

console.log(rob([2, 7, 9, 3, 1]));
