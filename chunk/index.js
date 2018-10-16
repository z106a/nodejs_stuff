/*
* Given an array and chunk size, divive the array into many subarrays where each subarray
* is of length size
* chunk([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
* chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
* chunk([1, 2, 3, 4, 5], 10) => [[1, 2, 3, 4, 5]]
*/

function chunk1(array, size) {
  var chunked = [];
  for (let el of array) {
    const last = chunked[chunked.length -1];
    if (!last || last.length === size) {
      chunked.push([el])
    } else {
      last.push(el);
    }
  }
  return chunked;
}

function chunk2(array, size) {
  var chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk2([1, 2, 3, 4, 5], 2));

module.exports = chunk1;