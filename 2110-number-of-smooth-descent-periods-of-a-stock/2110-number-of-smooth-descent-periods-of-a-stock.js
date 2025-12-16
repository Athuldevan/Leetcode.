/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
    let count = 0;      

    for (let i = 0; i < prices.length; i++) {
        if (i > 0 && prices[i - 1] - prices[i] === 1) {
            streak++;
        } else {
            streak = 1;
        }
        count += streak;
    }

    return count;
};
