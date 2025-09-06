function search(arr: number[], target: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;
    while (right >= left) {
        let middle: number = Math.floor((left + right) / 2);
        if (arr[middle] === target) {
            return middle;
        }
        else if (arr[middle] < target) {
            left = middle + 1;
        } else if (arr[middle] > target) {
            right = middle - 1
        }



    }
    return -1
};