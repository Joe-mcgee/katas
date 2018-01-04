function lengthArray() {
  var output = [];
  for (var i = 1; i <= 8; i++) {
  output.push(i)
  }
  return output
}

function boardMaker(len) {
  board = []
  for (var j = 0; j < len.length; j++) {
    var x = len[j];
    for (var k = 0; k < len.length; k++) {
      var y = len[k]
      board.push([x,y])
    }
  }
  return board
}

var queen1 = [8, 8];
var queen2 = [1, 1];

function queenThreat(queen1, queen2) {
  var len = lengthArray();
  var board = boardMaker(len)

// if queen shares x axis => true
  if ((queen1[0] == queen2[0]) || (queen1[1] == queen2[1])) {
    return console.log(true)
}

// diagnol logic
// true sets
// right diagnol => coordinates [x-1][y+1] and [x+1][y-1]
// left diagnol => coordinates [x+1][y+1] and [x-1][y-1]

var diag = [];
for (var l = 0; l < len.length; l++) {
  var mod = len[l]
  var testtopx = queen1[0]+mod
  var testtopy = queen1[1]-mod
  var testbotx = queen1[0]- mod
  var testboty = queen1[1] + mod
  for (var tile of board) {
    var tilex = tile[0]
    var tiley = tile[1]
    if ((testtopx == tilex && testtopy == tiley) || (testbotx == tilex && testboty == tiley) || (testtopx == tilex && testboty == tiley) || (testbotx == tilex && testtopy == tiley)) {
      diag.push([tilex, tiley])
    }
  }
}
for (var threat of diag) {
  var threatx = threat[0]
  var threaty = threat[1]

  if (queen2[0] == threatx && queen2[1] == threaty) {
    return console.log(true)
  }
}
return console.log(false)
}

queenThreat(queen1, queen2)