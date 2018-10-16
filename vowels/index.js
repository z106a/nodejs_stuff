// returns number of vowels from the given string.
// vowels('hi there!') --> 3
// vowels('why?) --> 0
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if(checker.includes(char)) {
      count++;
    }
  }
  return count;
}

function vowes2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;