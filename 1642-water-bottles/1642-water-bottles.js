/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let res = numBottles;

    while (numBottles >= numExchange) {
        let left = numBottles % numExchange;
         let refill =  Math.floor(numBottles / numExchange);
         res+=refill
        numBottles = refill + left
    }
    return res
};