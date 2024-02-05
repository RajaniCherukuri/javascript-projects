
function averageForStudent(nameIndex,scores){
  let sum = 0;
  for (let i=0; i<scores.length; i++){
    sum += scores[nameIndex][i];
  }
  let average = sum/scores[nameIndex].length;
  return average;
}

function averageForTest(testIndex,scores){
  let sum = 0;
  for (let i=0; i<scores.length; i++){
    sum += scores[i][testIndex];
  }
  let average = sum/scores[0].length;
  return average;
}

// TODO: Export all functions within an object.

module.exports = {
  averageForStudent:averageForStudent,
  averageForTest:averageForTest
};

//Practice:
//import modules-import module using require command
// const input = require("readline-sync")
// let userInput = input.question("What is your name? ")
// console.log("Hello " + userInput);

// const input = require('readline-sync');
// console.log(typeof input);