/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
    let length = 0;
    console.log(arr.length - 1)
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i - 1] < arr[i]) && (arr[i] > arr[i + 1])) {
            let left = i 
            let right = i;
            while (left > 0 && arr[left - 1] < arr[left]) {
                left--;

            }
            while ((right < arr.length - 1) && (arr[right] > arr[right + 1])) {
                right++;
            }

           let  a = (right - left) + 1 
            length = a > length ? a : length
        }
    }
    return length;
};