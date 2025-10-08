/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
    }

    for (key in hash) {
        if (hash[key] === 1) {
            return +key 
        }
    }
};