// reverseInt(15) === 51
// reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toSting()
    .split('')
    .reverse()
    .join('');
    
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;