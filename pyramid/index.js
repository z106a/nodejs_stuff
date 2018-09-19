// pyramid has spaces from left and right
// pyramid(3)
//  '__#__'
//  '_###_'
//  '#####'
//
// column [1,2,3,4,5] // midpoint is 3
// row = 1      // midpoint + row, midpoint - row

function pyramid(n) {
  const base = n + (n-1);// or (2 *n) -1
  const midpoint = Math.floor(base / 2);
  for (let row=0; row < n; row++) {
    let level = '';

    for (let column=0; column < base; column++) {
      if (midpoint - row <=column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

function pyramidRecursive(n, row=0, level='') {
  const base = n + (n-1);
  const midpoint = Math.floor(base / 2);
  if (n === row) { return; }
  if (base === level.length) {
    console.log(level);
    return pyramidRecursive(n, row+1);
  }
  if (level.length <= base) {
    if (midpoint - row <=level.length && midpoint + row >= level.length) {
      level += '#';
    } else {
      level += ' ';
    }
  }
  pyramidRecursive(n, row, level);
}

pyramidRecursive(3);

module.exports = pyramid;
