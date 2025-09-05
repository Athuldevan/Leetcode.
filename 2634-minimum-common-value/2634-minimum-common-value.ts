function getCommon(nums1: number[], nums2: number[]): number {

    let left: number = 0;
    let right: number = 0;
    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] === nums2[right]) {
            return nums1[left]
        }

        if (nums1[left] > nums2[right]) {
            right++;
        } else {
            left++;
        }

    }
    return -1;
};