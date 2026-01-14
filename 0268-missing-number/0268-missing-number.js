/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor = nums.length;   // this represents `n`

    for (let i = 0; i < nums.length; i++) {
        xor ^= i;            // XOR index (0 → n-1)
        xor ^= nums[i];      // XOR value
    }

    return xor;
};
