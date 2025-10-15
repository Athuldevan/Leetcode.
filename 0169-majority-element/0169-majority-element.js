
var majorityElement = function (nums) {
    let hash = {};
    let majority = nums[0];
    let maxCount = 0;

    // build frequency map
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }

     
        // if (hash[nums[i]] > Math.floor(nums.length / 2)) {
        //     return nums[i];
        // }
    }

    
    for (let key in hash) {
        if (hash[key] > maxCount) {
            maxCount = hash[key];
            majority = Number(key); 
        }
    }

    return majority;
};

    

