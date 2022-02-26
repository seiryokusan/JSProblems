/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;
    let bestProfit = 0;

    for (let index = 0; index < prices.length; index++) {
        const daysLeft = prices.slice(index);
        profit = generateProfit(daysLeft);
        if (profit > bestProfit) {
            bestProfit = profit;
        }
    }
    return bestProfit;
};

var generateProfit = function (prices) {
    const profits = [];
    const startingPrice = prices[0];
    for (let index = 1; index < prices.length; index++) {
        profits.push(prices[index] - startingPrice);
    }
    return Math.max(...profits);
};

console.log(
    maxProfit([
        7, 1, 5, 3, 6, 4, 7, 1, 5, 3, 6, 4, 7, 1, 5, 3, 6, 4, 7, 1, 5, 3, 6, 4, 7, 1, 5, 3, 6, 4, 7, 1, 5, 3, 6, 4, 7,
        1, 5, 3, 6, 4,
    ])
); //6
console.log(maxProfit([7, 6, 4, 3, 1])); //0
console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
