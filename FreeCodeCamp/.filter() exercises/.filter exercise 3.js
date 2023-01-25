// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5);
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]