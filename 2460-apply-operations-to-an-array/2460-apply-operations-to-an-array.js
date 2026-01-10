/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let p = i + 1;
        if (nums[i] === nums[p]) {
            const res = nums[i] * 2;
            nums[i] = res;
            nums[p] = 0
        }
    };
    let p = 0;
    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[i]
            nums[i] = nums[p];
            nums[p] = temp
            p++

        };

    }
    return nums

};