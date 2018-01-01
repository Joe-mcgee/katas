var camelCase = function(input) {
  var splits = input.split(' ')
  var output = ''
  output = output.concat(splits[0])
  for (var i = 1; i < splits.length; i++) {
    var word = splits[i];
    word = word.replace(/^./g, function(match) {
      return match.toUpperCase();
    })
    output = output.concat(word);
  }
  return output
}

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));