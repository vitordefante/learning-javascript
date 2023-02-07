function rot13(str) {

    // Store the alphabet to use it's letters indexes later on.
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const codedStr = str.split(""); // split the string passed as argument in an array of individual letters.
    let decoded = "";
  
    for (let i = 0; i < codedStr.length; i++) {
      const alphabetPosition = alphabet.indexOf(codedStr[i]); // Position of the coded letter in the alphabet.
      if (alphabet.indexOf(codedStr[i]) === -1) {
        decoded += codedStr[i]; // If character is not a letter, just add the character.
      } else if (alphabetPosition === 13) {
        decoded += 'A';
      } else if (alphabetPosition > 13) {
        decoded += alphabet[alphabetPosition - 13];
      } else if (alphabetPosition <= 13) {
        decoded += alphabet[alphabetPosition + 13];
      }
    } return decoded;
  }
  
  rot13("SERR PBQR PNZC");