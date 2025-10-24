/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//helper merge function 
var findMedianSortedArrays = function (nums1, nums2) {
    let p1 = nums1.length - 1;
    let p2 = nums2.length - 1;
    let k = nums1.length + nums2.length - 1;
    //merging from end 
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[k] = nums1[p1];
            p1--
        } else {
            nums1[k] = nums2[p2];
            p2--;
        };
        k--
    };
    while(p2>=0){
        nums1[k] = nums2[p2];
        p2--
        k--
    }
let n = nums1.length;
if (n % 2 === 1) {
    return nums1[Math.floor(n / 2)];  // middle element
} else {
    return (nums1[n/2 - 1] + nums1[n/2]) / 2; // average of two middle elements
}

};