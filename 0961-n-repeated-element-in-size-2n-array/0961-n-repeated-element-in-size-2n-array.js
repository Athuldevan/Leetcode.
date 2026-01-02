/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let maxCount = -Infinity;
    let ans = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let p = 0;
        while (p < nums.length) {
            if (nums[i] === nums[p]) {
                count++;

            }
            p++;
        };

        if (count > maxCount) {
            maxCount = count
            ans = nums[i]
        }
    };

    return ans

};