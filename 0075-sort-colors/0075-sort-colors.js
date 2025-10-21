/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 0;  i<nums.length;i++){
        let minIndex = i;
        for(j = i+1; j<nums.length;j++){
            if(nums[j]<nums[minIndex]){
                minIndex = j
            }
        }
        //swap
         let temp =  nums[i];
         nums[i] = nums[minIndex];
        nums[minIndex] = temp

    }
    return nums
};