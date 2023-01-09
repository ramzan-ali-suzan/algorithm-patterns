/**
 * Richest Customer Wealth
   You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
   A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 */

/**
 * param {number[][]} account
 * return {number}
 */
const maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach(item => {
        const sum = item.reduce((a, b) => a + b);
        if (sum > max) {
            max = sum;
        }
    });

    return max;
}

console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));