/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    var wealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        const sum = accounts[i].reduce((acc, curr) => acc + curr, 0);
        if (sum > wealth) {
            wealth = sum;
        }
    };
    return wealth
}