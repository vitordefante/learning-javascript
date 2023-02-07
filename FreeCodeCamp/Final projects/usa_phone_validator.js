// This code returns a boolean that tells if the given number passed as argument fits the USA numbers pattern that is specified in the regular expression.

function telephoneCheck(str) {
    return /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str)
  gm;
  }
  
  telephoneCheck("555-555-5555");