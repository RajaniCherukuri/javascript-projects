// function myFunction() {
//     let i = 10;
//     return 10 + i;
// }

// console.log(i);
// console.log(myFunction());//call function instead of variable


//practice

// let a = 0;//global variable
// function coolFunction(){
//     let b = 2;//local variable
//     return a + b;
// }
// console.log(coolFunction());
// // a is accessible inside and outside of coolFunction().
// // b is only accessible inside of coolFunction().

// function superCoolFunction(){
//     let b = 10;
//     return a + b;
// }
// console.log(superCoolFunction());

// let a = 0;
// console.log(a);

// function coolFunction() {
//     let b = 2;
//     console.log(`a = ${a}, b = ${b}.`);
//     return a + b;
// }
// a += 1;
// console.log(a);

// coolFunction();
// console.log(b);

// function coolFunction() {
//     let newVariable = 5;
//     return newVariable;
// }
// console.log(coolFunction());

// function myFunction() {
//     let i = 10;
//     return newVariable + i;
// }
// //console.log(i);
// console.log(myFunction());//call function instead of variable


//what order the compiler will execute the code?
// let a = 0;

// function coolFunction() {
//     let b = 2;
//     return a + b;
// }

// function coolerFunction() {
//     let c = 5;
//     c += coolFunction();
//     return c;
// }

// console.log(coolFunction());
// console.log(coolerFunction());


//variable shadowing
// let a = 0;

// function myFunction() {
//     let a = 10;
//     return a;
// }
// console.log(myFunction());
// console.log(a);

//Undefined
// let x;
// console.log(x);

//Null
// let x = null;
// console.log(x);


//throw a default error
// throw Error("You cannot divide by zero!");

// expect( function() {
//     checkThrow(); 
// }).toThrow(new Error('You cannot divide by zero!'));

// throw SyntaxError("That is the incorrect syntax");

//try .. catch..finally
	

const input = require('readline-sync');

let animals = [{name: 'cat'}, {name: 'dog'}];
let index = Number(input.question("Enter index of animal:"));

try {
    console.log('animal at index:', animals[index].name);
} catch(err) {
    console.log("We caught a TypeError, but our program continues to run!");
    console.log("You tried to access an animal at index:", index);
}

console.log("the code goes on...");

