/** 
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
        if(nums.length === 1 ) return nums[0];
    let res = []
    for(let i = 0; i<nums.length  - 1 ; i++) {
        res.push((nums[i] + nums[i+1]) % 10  )
    }
        return triangularSum(res)
    
    
};