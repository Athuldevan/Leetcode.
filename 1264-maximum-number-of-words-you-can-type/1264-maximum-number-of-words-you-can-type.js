/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const words = text.split(' ');
    let count = 0;

    for (let word of words) {
        let canType = true;

        for (let w of word) {
            if (brokenLetters.includes(w)) {
                canType = false; 
                break; // stop checking this word
            }
        }

        if (canType) count++; // count only full words
    }

    return count;
};
