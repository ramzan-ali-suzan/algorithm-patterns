/**
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const uniqueNums = [];

    for (const element of nums) {
        if (uniqueNums.includes(element)) return true;

        if (!uniqueNums.includes(element)) {
            uniqueNums.push(element);
        }
    }

    return uniqueNums.length !== nums.length;
}

console.log(containsDuplicate([1, 2, 1]));