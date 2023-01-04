/**
    Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

    Constraints:
    1 <= n <= 104
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            answer.push("FizzBuzz");
            continue;
        }

        if (i % 3 === 0) {
            answer.push("Fizz");
            continue;
        }

        if (i % 5 === 0) {
            answer.push("Buzz");
            continue;
        }

        answer.push(i.toString());
    }

    return answer;
}

console.log(fizzBuzz(5));