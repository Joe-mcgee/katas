function calculateChange(total, cash) {
  var returnValue = {}
  var float = new Object();
    float.TwentyDollar = {2000: 0};
    float.TenDollar = {1000: 0};
    float.FiveDollar = {500: 0};
    float.TwoDollar = {200: 0};
    float.One = {100: 0};
    float.Quarters = {25: 0};
    float.Dimes = {10: 0};
    float.Nickels = {5: 0};
    float.Pennies = {1: 0};
  var change = (cash*100 - total*100);
  var remainingChange = change;
  //loop to calculate required change
  for (denomination in float) {
    var output = float[denomination]
    console.log(output)
    var denominationNumber = Object.keys(output)
    if (remainingChange >= denominationNumber) {
      var amount = Math.floor(remainingChange / denominationNumber);
      output[denominationNumber] = amount;
      remainingChange -= denominationNumber*amount
    }
  }
  // loop to make correct output
  for (var denomination in float) {
    var output = float[denomination]
    var denominationNumber = Object.keys(output)
    if (output[denominationNumber] === 0) {
      delete float[denomination]
    } else {
      returnValue[denomination] = output[denominationNumber]
    }
}
 return returnValue
}

console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));


