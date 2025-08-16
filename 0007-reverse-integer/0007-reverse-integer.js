/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (number) {
    let rev = 0;
    const numCopy = number;
    let num = Math.abs(number)
    while (num > 0) {
        let lastDigit = num % 10;
        rev = (rev * 10) + lastDigit;
        num = Math.trunc(num / 10);


    }
    let limit = Math.pow(2, 31)
    if (rev > limit || rev < -limit) return 0
    return (numCopy < 0) ? -rev : rev



};