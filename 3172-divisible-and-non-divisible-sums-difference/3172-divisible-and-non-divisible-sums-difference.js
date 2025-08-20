/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisible = 0    ;
    let notDivisible = 0 ;
    for(let i =1; i<=n; i++) {
        if( i % m  === 0  ){
            divisible+=i
        }

        if( i % m !== 0 ) {
            notDivisible+=i
        }
    }

   
    return notDivisible - divisible
};