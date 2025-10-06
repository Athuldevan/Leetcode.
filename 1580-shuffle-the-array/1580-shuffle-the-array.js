/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let ans = []
    let p = n;
    for (let i = 0; i < n; i++) {
        ans.push(nums[i], nums[p]);
        p++;
    }
    return ans

};