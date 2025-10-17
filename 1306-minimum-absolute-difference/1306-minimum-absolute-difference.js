/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    const nums = arr.sort((a, b) => a - b);
    const length = nums.length;
    const ans = [];
    let min = Infinity;

    for (let i = 1; i < length; i++) {
        let diff = nums[i] - nums[i - 1]
        if (min > diff) {
            min = diff;
            ans.length = 0
            ans.push([nums[i - 1], nums[i]])
        } else if (diff === min) {
            ans.push([nums[i - 1], nums[i]])
        }


    }

    return ans
};