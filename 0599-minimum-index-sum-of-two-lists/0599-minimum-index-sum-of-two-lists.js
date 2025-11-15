/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const set = new Set(list2);
    let minSum = Infinity;
    let res = [];

    for (let i = 0; i < list1.length; i++) {
        if (set.has(list1[i])) {
            const sum = i + list2.indexOf(list1[i])
            if (sum < minSum) {
                minSum = sum;
                res = [list1[i]]
            } else if (sum === minSum) {
                res.push(list1[i])
            }
        }
    };
    return res;
};