/*
* steps(2)
*   '# '
*   '##'
* steps(3)
*   '#'
*   '## '
*   '## '
* Step has spaces on the right hand side!
*/

function steps(n) {
  for (let row=0; row < n; row++) { //iterate throw rows
    let stair = '';

    for (let column=0; column < n; column++) { // iterate throw columns
      if (column <= row) {
        stair += '#';
      } else {
        stair += '_';
      }
    }
    console.log(stair);
  }
}

function stepRecursive(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return stepRecursive(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += '_';
  }

  stepRecursive(n, row, stair);
}

stepRecursive(3);

module.exports = steps;
