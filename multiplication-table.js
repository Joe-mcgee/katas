function drawSquares(numberArray, maxValue) {
  var maxNum = Math.max.apply(Math, numberArray)
  var length = ''
  var output = ''
  var lengthPiece = '+'+'-'.repeat((maxNum.toString().length+ 2));
    for (var j = 1; j <= maxValue; j++) {
    length = lengthPiece.concat(length)
  }
  length = length.concat('+'+'\n')
  var height = ''
  var rowIterNumer = 0;
  var rowIterDenom = maxValue;
  for (var k = 0; k < numberArray.length; k++) {
    var number = numberArray[k]
    var heightPiece = '| '+ numberArray[k]+' '.repeat(maxNum.toString().length - numberArray[k].toString().length +1);
    height = height.concat(heightPiece)
    rowIterNumer += 1;


    if ((rowIterNumer/rowIterDenom) % 1 === 0) {
      height = height.concat('|'+'\n')
      output = output.concat(length + height)
      height = ''
      rowIterNumer = 0;
    }

  }
  output = output.concat(length)
  return output
  }

function numberBuilder(maxValue) {
  var array = []
  var ones = []
  for (var i = 1; i <= maxValue; i++) {
    ones.push(i)
    for (var j = 1; j <= maxValue; j++) {
      array.push(j*i)
    }
  }
  return array
}

var multiplicationTable = function(maxValue) {
  var numberArray = numberBuilder(maxValue);
  var squares = drawSquares(numberArray, maxValue)
  return squares
  }


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));