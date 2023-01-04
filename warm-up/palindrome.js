/**
 * Given an integer x, return true if x is a palindrome, and false otherwise. 
 */

/** 
* @param {number} x
* @return {boolean}
*/
const isPalindrome = function (x) {
    const inputAsArray = Array.from(String(x), Number);

    const reverseInputAsArray = [];

    for (let i = inputAsArray.length - 1; i >= 0; i--) {
        reverseInputAsArray.push(inputAsArray[i]);
    }

    const reverseNumber = Number(reverseInputAsArray.join(''));

    return x === reverseNumber;
};

console.log(isPalindrome(-121));