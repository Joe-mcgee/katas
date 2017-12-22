var conditionalSum = function(values, condition) {
  var output = [];
  for (var i = 0; i < values.length; i++ ) {
    value = values[i];
    if (condition == 'even') {
      if (value % 2 == 0) {
        output.push(value)
      }
    } else {
      if (value % 2 != 0 ) {
        output.push(value)
      }
    }
  }
  return output.reduce(function add(a,b) {
    return a + b;
  }, 0);
}

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));