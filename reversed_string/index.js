'use strict';
const log = console.log.bind(this);

function reverse1(str) {
  debugger;
  return str.split('').reverse().join('');
}

function reverse2(str) {
  debugger;
  var reversed = ''

  for (let char of str) {
      reversed = char + reversed;
  }

  log(reversed);
  return reversed;
}

reverse3('hello');

function reverse3(str) {
  debugger;
  log(str.split('').reduce((acc, char) => char + acc));
}

module.exports = reverse3;
