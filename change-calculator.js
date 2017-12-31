



var calculateChange = function(total, cash) {
  var float = { 'Twenty Dollars': 0, 'Ten Dollars': 0, 'Five Dollars': 0, 'Two Dollars': 0, 'One Dollar': 0, 'Quarters': 0, 'Dimes': 0, 'Nickels': 0, 'Pennies': 0};
  var change = cash - total;
  var remainingChange = change;
  if (remainingChange >= 20) {
    var twenties = Math.floor(remainingChange / 20);
    console.log(twenties)
    float['Twenty Dollars'] = twenties;
    remainingChange -= 20*remainingChange;
  }
  if (remainingChange >= 10) {
    var tens = Math.floor(remainingChange / 10)
    float['Ten Dollars'] = tens;
    remainingChange -= 10*tens
  }
  if (remainingChange >= 5) {
    var fives = Math.floor(remainingChange / 5)
    float['Five Dollars'] = fives;
    remainingChange -= 5*fives;
  }
  if (remainingChange >= 2) {
    var twos = Math.floor(remainingChange /2);
    float['Two Dollars'] = twos;
    remainingChange -= 2*twos;
  }
  if (remainingChange >= 1) {
    var ones = Math.floor(remainingChange / 1)
    float['One Dollars'] = ones;
    remainingChange -= 1*ones;
  }
  if (remainingChange >= 0.25) {
    var quarters = Math.floor(remainingChange / 0.25)
    float['Quarters'] = quarters;
    remainingChange -= 0.25* quarters;
  }
  if (remainingChange >= 0.1) {
    var dimes = Math.floor(remainingChange / 0.10)
    float['Dimes'] = dimes;
    remainingChange -= 0.1*dimes;
  }
  if (remainingChange >= 0.05) {
    var nickels = Math.floor(remainingChange / 0.05)
    float['Nickels'] = nickels;
    remainingChange -= 0.05* nickels;
  }
  if (remainingChange >= 0.01) {
    var pennies = Math.round(remainingChange / 0.01);
    float['Pennies'] = pennies;
    remainingChange -= 0.01 * pennies
  }

for (var denomination in float) {
  if (float[denomination] === 0)
    delete float[denomination]
}
return float


}

console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));
console.log(calculateChange(20, 60))