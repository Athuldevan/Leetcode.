/**
 * @param {string} s
 * @return {boolean}
 */ //3902
var hasSameDigits = function (s) {
    while (s.length > 2) {
        let res = ""; //292, 1
        for (let i = 0; i < s.length - 1; i++) {
            let reminder = (Number(s[i]) + Number(s[i+1])) % 10
            res += reminder.toString()

        }
        s = res;

    }
        console.log(s)
    return  s[0] === s[1];
};