
var repeatNumbers = function(data) {
  var output = []
  for (var i = 0; i < data.length; i++) {
    var set = data[i];
    var number = set[0];
    var iter = set[1]
    holder = ""
    for (var j = 0; j < iter; j++) {
      holder += number.toString();
    }
    output += holder + ', ';
  }
  return output;
}

console.log(repeatNumbers([[1, 10]]))
console.log(repeatNumbers([[1, 2], [2, 3]]))
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))