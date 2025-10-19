/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let firstHighest = -Infinity;
    let secondHighest = -1;

    let firstNumber = false;
    for(let indexI=0; indexI<s.length;indexI++){
        const char = s[indexI];
        if(!isNaN(char) && !firstNumber){
            firstHighest = parseInt(char);
            firstNumber = true;
        }else if(!isNaN(char)){
            if(char>firstHighest){
                secondHighest = firstHighest;
                firstHighest = parseInt(char);
            }else if(parseInt(char)===firstHighest){
                // do nothing
            }else if(char>secondHighest){
                secondHighest = parseInt(char);
            }
        }
    }
    return secondHighest;
};