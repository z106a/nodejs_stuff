/// palindrome('abbba') === true
/// palindrome('abcdfe') === false


function palindrome1(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

function palindrome2(str) {
  debugger;
  return str.split('').every((val, idx) => val === str[str.length - idx -1]);
}

module.exports = palindrome1;
