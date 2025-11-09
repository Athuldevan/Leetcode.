/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let arr  = [0];
    let sum = 0; //-5
    for (let i = 0; i < gain.length; i++) {
        const res = sum + gain[i];
        arr.push(res)
        sum = res;
    }
   return Math.max(...arr)

};