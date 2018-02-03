// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('');
  var res = new Array(str.length);
  for (var i = 0; i < str.length; i++) {
    res[i] = str.charAt(str.length - i - 1);
  }

  // return "khaled";
  return res.join('');
}

module.exports = reverse;
