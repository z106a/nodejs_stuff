/*
* program that logs thu numbers from 1 to n. But for mulitple of 3 print fizz,
 * for multiple of 5 print buzz. for both multiples print fizzbuzz
*
*
*/

function fizzBuzz(n) {
  for (let i =1; i<= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports fizzBuzz;
