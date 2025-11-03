/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {

    let cost = 0
    for (let i = 0; i < colors.length - 1; i++) {
        let sum = neededTime[i];
        let max = neededTime[i];
        let right = i + 1;
        while (right < neededTime.length && colors[right] == colors[i]) {
            sum += neededTime[right]; //7
            max = Math.max(max, neededTime[right]); // 4 
            right++;

        };
        cost += sum - max; //0
        i = right - 1
    };

    return cost
};