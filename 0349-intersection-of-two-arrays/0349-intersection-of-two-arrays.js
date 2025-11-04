/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    const res = [];
    const arr1 = Array.from(set1)
    for (let i = 0; i < arr1.length; i++) {
        if (set2.has(arr1[i])) {
            res.push(arr1[i])

        }

    };
    return res;
};