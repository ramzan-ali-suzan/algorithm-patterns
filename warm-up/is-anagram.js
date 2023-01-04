
/**
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 typically using all the original letters exactly once.

 Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const isAnagram = function (s, t) {
    const sArray = Array.from(s);
    const tArray = Array.from(t);

    if (sArray.length !== tArray.length) return false;

    for (const item of sArray) {
        if (tArray.includes(item)) {
            const index = tArray.indexOf(item);
            tArray.splice(index, 1);
        }
    }

    return tArray.length === 0;
}

console.log(isAnagram('anagram', 'nagaram'));