/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let hash = {}
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1;
        };
    }
    // console.log(hash)
    // Looping through the hash
    for (const key in hash) {
        if (hash[key] === 1) {
            arr.push(+key)
        }

    }
    return arr
}
