/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let p = 0; //pointer to keep track put the elements in the position 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p] = nums[i];
            p++;

        }
    }
    // put the remainig elemnets to zero
    for (let i = p; i < nums.length; i++) {
        nums[i] = 0

    }
    return nums;
};

