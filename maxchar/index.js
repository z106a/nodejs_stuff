//return most commonly char in string
// maxChar("abccccccd") === "c"
// maxChar("apple 123111111") === "1"

var string = 'hello there!';

function maxChar(str) {
  var charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(charMap);
  console.log(maxChar + ': ' + max);
}

maxChar(string);

module.exports = maxChar;