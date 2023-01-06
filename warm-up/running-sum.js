/**
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            output.push(nums[i]);
        } else {
            output.push(output[i - 1] + nums[i]);
        }
    }

    return output;
}

console.log(runningSum([1, 2, 3, 4]));