/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x =0;
    operations.map(el => {
        if(el.includes('+')){
            x++

        }
        if(el.includes('-')){
            x--
        }

    })
    return  x
};