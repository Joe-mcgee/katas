var prompt = require('prompt-sync')();

console.log('Welcome to the square code generator')

var message = prompt('Please input your message without spaces (max 81 chars): ')
message = message.replace(/\s/g, '')
if (message.length > 81) {
  console.log('message to long!')
  message = prompt('Please input your message without spaces (max 81 chars): ')
}

function dimension(message) {
return Math.ceil(Math.sqrt(message.length));
}

var length = dimension(message)
message = message.split('');
var square = [];

while (message.length > 0) {
  var j = 1;
  var line = []
  while (j <= length) {
    if (message.length > 0) {
    var char = message.shift();
    line.push(char);
  }
    j++
  }
  square.push(line)
}
console.log(square)

var encode = []
var encodeLine = []
var i = 1;
while (i <= length) {
for (var line of square) {
  var letter = line.shift();
  encodeLine.push(letter)
}
encode.push(encodeLine)
encodeLine = []
i++
}



var encodedMessage = ''
for (var codeWordArray of encode) {
  if (codeWordArray.includes(undefined))
    codeWordArray = codeWordArray.filter(function(n) { return n != undefined})
    codeWordArray = codeWordArray.join('')
    codeWordString = codeWordArray.toString()
    encodedMessage = encodedMessage.concat(codeWordString+ ' ')
  console.log(codeWordArray)
}

console.log(encodedMessage)


