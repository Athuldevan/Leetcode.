/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left<=right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if(nums[mid] === target){
            let i = mid
            let j = mid;
            console.log(mid)
            while ((i >= 0) && nums[i - 1] === nums[i]) {
                i--
            }
            while ((j <= nums.length) && (nums[j] === nums[j + 1])) {
                j++
            }
            return [i, j]
            break;
        }
    }
    return [-1, -1]
};