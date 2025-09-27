/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
        let count = 0
    const arr = nums.sort((a, b) => a - b );
    for (let i = arr.length; i >= 2; i--) {
        let left = 0
        let right = i - 1;
        while (left  < right) {
            if (arr[left] + arr[right] > arr[i]) {
                count = count + right - left;
                right--
            } else {
                left++;
            }
        }
    }
return count
};