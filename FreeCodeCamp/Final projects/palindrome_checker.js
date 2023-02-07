//This function takes a string and return if it's the same as it is reserved (a Palimdrome).

function palindrome(str) {
  
    //remove all non-alphanumeric characters from the passed string.
    const word = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  
    //check if the string passed is the same as it's reversed version and returns a boolean.
    return word === word.split("").reverse().join("");
  }
  
  console.log(palindrome("eye"))