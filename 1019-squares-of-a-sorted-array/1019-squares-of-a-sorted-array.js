/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squared = [];
    for(let i=0; i<nums.length;i++){
        squared.push(nums[i]*nums[i])
    }

    return squared.sort((a, b) => a-b)
    
};