/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let p = i + 1;
        while (p != nums.length) {
            if (nums[i] + nums[p] === target) {
                return [i + 1, p + 1];
                break;
            }
            p++;
        }
    }

};