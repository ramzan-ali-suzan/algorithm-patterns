/**
   Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
   You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = function (nums) {
    const uniqueNums = [];

    for (const item of nums) {
        if (!uniqueNums.includes(item)) {
            uniqueNums.push(item);
        } else {
            const index = uniqueNums.indexOf(item);
            if (index > -1) uniqueNums.splice(index, 1);
        }
    }

    return uniqueNums[0];
}

console.log(singleNumber([1]));