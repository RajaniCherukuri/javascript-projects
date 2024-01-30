const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isStartingWithA = function(str) {
  if (str.startsWith("a")) {
  return false;
  }

  return true;
};

console.log(getValidInput('Create a string starting with a:', isStartingWithA));

// TODO 2: write a validator 
// that ensures input is a vowel
let isStringAVowel = function(str) {
  str = str.toLowerCase()
   if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
  return false;
  }

  return true;
};

console.log(getValidInput('Create a string starting with a vowel:', isStringAVowel));

// Be sure to test your code!
