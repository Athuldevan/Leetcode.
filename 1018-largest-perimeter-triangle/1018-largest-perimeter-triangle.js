/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 0;
    let length = nums.length;

    for (let i = length - 1; i >= 2; i--) {
        let left = 0;
        let right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
             
                let sum = nums[right - 1] + nums[right] + nums[i]; 
                count = Math.max(count, sum);
                break; 
            } else {
                left++;
            }
        }
    }
    return count;
};
