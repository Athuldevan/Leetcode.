/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j] && !res.includes(a[i])) {
                res.push(a[i]);
            }
        }
    }

    return res;
};