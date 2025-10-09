/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, t) {
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1;
        let target = t - nums[i]
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return [i + 1, mid + 1]
            } else if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid+1;
            }


        }
    }

};