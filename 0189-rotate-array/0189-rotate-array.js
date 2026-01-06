/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
k = k % nums.length;
function reverse(left, right) {
    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        right--;
        left++;
    };
};
    //reverse all arr
    reverse(0, nums.length - 1);
    //rev first k elements
    reverse(0, k - 1);

    //rev ele agter k
    reverse(k , nums.length - 1);
    return nums



};