/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  
    let prevCount = 0;
   let beams = 0 
    let row = bank[0].length;
    for (let i = 0; i<bank.length; i++) {
    let count = 0;
        count=0;
        for (let j = 0; j<bank[i].length ;j++) {
            if (bank[i][j] === '1') {
                count++

            }
        };

        if (count>0) {
                     beams += prevCount * count;
            prevCount = count;

        }


    };

    return beams

};