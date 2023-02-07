// The function utilizes two arrays, decimal and roman, which store the numerical representation and the corresponding Roman numeral symbols, respectively. The code then iterates through each value in the decimal array and appends the corresponding Roman numeral symbol to the result string repeatedly until the value of num is less than the current decimal value. In the end, the generated result string is returned.

function convertToRoman(num) {
    const decimal = [1000, 900, 500, 400,
     100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    const roman = ["M", "CM", "D", "CD", "C", 
    "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = '';
    
    for (let i = 0; i < decimal.length; i++) {
      while (num >= decimal[i]) {
        result += roman[i];
        num -= decimal[i];
      }
    }
    
    return result;
  }
  
  convertToRoman(36);