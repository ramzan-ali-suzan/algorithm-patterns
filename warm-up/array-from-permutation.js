/**
 * Build Array from Permutation
  Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

  A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive). 
 */
/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const buildArray = function (nums) {
    const ans = [];
    for (const element of nums) {
        ans.push(nums[element]);
    }

    return ans;
}

console.log(buildArray([0, 2, 1, 5, 3, 4]));