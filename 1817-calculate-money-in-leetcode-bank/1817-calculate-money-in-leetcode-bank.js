/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let money = 1;
    let currMoney = 1;
    let sum = 0;
    for (let i = 1; i <=n; i++) {
    sum+=currMoney;
    currMoney++
        if (i % 7 == 0) {
            money = money + 1;
            currMoney = money
        }
    }
return sum
};
