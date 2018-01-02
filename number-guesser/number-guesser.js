var prompt = require('prompt-sync')();

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function evaluation(guess, theNumber, guessNumber) {
  guess = parseInt(guess, 10)

  if (guess < theNumber) {
    return console.log('Too Low!')
  } else if (guess > theNumber) {

    return console.log('Too High!')
  } else if (guess == theNumber) {
    return console.log('You got it! You took '+guessNumber+' attempts!')

  } else {
    console.log('please select a valid number')
    return

  }
}

function game() {
  var guessNumber = 1;
  var theNumber = getRandomIntInclusive(1, 20);
  var guesses = []
  console.log(theNumber)
  var victory = false
  while (victory == false) {
    var guess = prompt('Guess a number: ')
    if (!guesses.includes(guess)) {
      guesses.push(guess)
      evaluation(guess, theNumber, guessNumber)
      guessNumber += 1;
      var guessNum = parseInt(guess, 10)
        if (isNaN(parseInt(guess, 10))) {
          guessNumber -= 1
        }
        if (guess == theNumber) {
          victory = true;
        }
    } else {
      console.log("You've already selected that")
    }
  }
}

game()