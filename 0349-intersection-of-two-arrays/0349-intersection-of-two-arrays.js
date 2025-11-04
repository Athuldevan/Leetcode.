/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let p = 0;
    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        let p = 0;
        while (p < nums2.length) {
            if (nums1[i] === nums2[p] && !(res.includes(nums2[p]))) {
                res.push(nums2[p])
            }
            p++;
        }

    };

    return res;
};