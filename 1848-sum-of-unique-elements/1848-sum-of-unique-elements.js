
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let output = 0;
    const hashmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (hashmap.has(num)) {
            const currentCount = hashmap.get(num);
            if (currentCount === 1) output -= num;
            hashmap.set(num, currentCount + 1);
        } else {
            hashmap.set(num, 1);
            output += num;
        }
    }

    return output;
};