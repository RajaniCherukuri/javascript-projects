const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
// strNew = str.slice(3)+str.slice(0,3);
// console.log(strNew);
// console.log(str);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`"Original string is ${str} and new string is ${str.slice(3)+str.slice(0,3)}" `)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
userInput = input.question("Please enter the number of letters that will be relocated? ")
console.log(userInput)
strNew = str.slice(userInput)+str.slice(0,userInput);
console.log(strNew);

//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput >=(str.length))
{
    //default to moving 3 
    console.log(str.slice(3)+str.slice(0,3));
    console.log(`The number of letters relocated should not be greater than ${str.length}`);
}else
{
    console.log(strNew);
}