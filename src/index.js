module.exports = function toReadable (number) {
  let lessTwentyNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]; 
  let tensNumbers = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let hundredsNumbers = ["hundred"];
  let result = '';
  while (number >= 0) {
    if (number < 20) {
      return  result = result + lessTwentyNumbers [number];
    } else if (number < 100) {
      return result = result + (number % 10 === 0 ? tensNumbers[Math.floor(number / 10-2)] : 
             tensNumbers[Math.floor(number / 10-2)] + ' ' + lessTwentyNumbers[number % 10]);
    } else if (number < 1000) {
      if (number % 100 === 0) { 
        return result = result + lessTwentyNumbers[Math.floor(number / 100)] + ' ' + hundredsNumbers[0]
      } else {
        result = result + lessTwentyNumbers[Math.floor(number / 100)] + ' ' + hundredsNumbers[0] + ' ';
        number = number % 100;  
      }
    }
  }
  return result;
}
