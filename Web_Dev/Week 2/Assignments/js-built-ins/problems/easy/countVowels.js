/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/


const countVowels = (str) => {
  let count = 0;
  let string = str.toString();

  for (let key in string) {
    let char = string.charAt(key);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
      count++;
    }
  }
  return count;
}

module.exports = { countVowels };