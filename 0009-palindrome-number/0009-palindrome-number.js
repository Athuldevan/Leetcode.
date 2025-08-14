/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    const number = num;
    let rev = 0;
    let rem = 0;            
    while(num > 0) {
        rem = num % 10;  //1
        rev = (rev * 10) + rem; //121
        num = Math.trunc(num / 10) //1   

    }
    return rev === number
    
};