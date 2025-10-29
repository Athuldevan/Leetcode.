/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (numbers) {
    let smallest = 1;
    const nums = [...new Set(numbers.sort((a, b) => a - b))];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            smallest = nums[i]
            let p = i
            while (p < nums.length) {
                if (nums[p + 1] === smallest + 1) {
                    smallest = nums[p+1]
                    p++
                } else {
                    return smallest + 1
                }
            }


            return smallest + 1
        }
    }
    return smallest

};