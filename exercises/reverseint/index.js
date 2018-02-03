// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var sign = Math.sign(n);

  var arr = n.toString().split('');

  // for (var i = arr.length -1; i > 0; i--) {
  //   if (arr[i] === '0') {
  //     arr.pop()
  //   } else {
  //     i = 0;
  //   }
  // }

  // return sign * parseInt(arr.reverse().join(''));

  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;
