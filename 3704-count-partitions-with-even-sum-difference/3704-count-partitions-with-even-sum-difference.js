/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length-1; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let leftPointer = i;
        let rightPointer = i + 1
        while (rightPointer < nums.length) {
            rightSum += nums[rightPointer];
            rightPointer++;
        };
        while (leftPointer >= 0) {
            leftSum += nums[leftPointer];
            leftPointer--;


        }
        const difference = Math.abs(leftSum - rightSum);
        console.log(difference)
        if (difference % 2 === 0) {
            count++
        }

    }
    return count;
};