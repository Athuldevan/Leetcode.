var containsDuplicate = function(nums) {
    let hashTable = {} //initializing a empty hash tabel 
    for(let i =0; i<nums.length; i++) {
        let num = nums[i];
        if(hashTable[num]) {
            return true;
        }else {
            hashTable[num] =  true;
        }
    }
        return false;
};
