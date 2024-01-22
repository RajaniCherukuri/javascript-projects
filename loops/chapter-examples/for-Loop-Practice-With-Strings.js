// Create a string variable containing your name.
let myName = "Rajani Cherukuri";

// Write a for loop that prints each character in your name on a different line.
for (i = 0; i< myName.length; i++){
    console.log(myName[i]);
}

//practice the chapter repeating with loops:
//2 mechanism to make iteration simple-for and while loop
//for loop
// for(let i = 0; i < 51; i++){
//     console.log(i);
// }

//iterating over strings:
// let name = "LaunchCode";
// for (i = 0; i< name.length; i++){
//     console.log(name[i]);
// }


//Iterating over Arrays:
// let languages = ["JS","Java","C#","Python"];
// for (i = 0; i < languages.length;i++){
//     console.log(languages[i]);
// }

//For loop examples:
//loop variable/intial expression can be initialised to any value:Examples
// for (i = 3; i < 10; i++){
//     console.log(i);
// }
// let name ="LaunchCode";
// for (i = 6; i < name.length; i++){
//     console.log(name[i]);
// }

//print launchcode 42 times:
// for (i = 0; i < 42; i++){
//     console.log("LaunchCode");
// }

//loop condition examples:
//infinite loop example,please dont run this code,if you by mistake run, try to stop manually using control+c.
// for (i = 0; i >-1; i++){
//     console.log("LaunchCode");
// }

// for (let i = 0; i < 51; i--) {
//     console.log(i);
//  }

//update expression-ex-i++(incrementing the loop variable by 1).There are different ways to update the loop variable.
// for (i = 0; i < 51; i +=2){
//     console.log(i);
// }

// let phrase = "Chili Cook-off";
// for(i = 0; i < phrase.length-1;i+=3){
//     console.log(phrase[i]);
// }

//the accumulator pattern
// let n = 6;
// total = 0;
// for (i = 1; i <= n; i++ ){
//     console.log(total+=i);
// }
//reversing a string
// let str = "blue";
// reversed = "";//accumulator variable
// for(i = 0; i < str.length; i++){
//    reversed = str[i] + reversed;
//     }
//     console.log(reversed);

//the accumulator pattern-Array
// let numbers = [2,-5,13,42];
// let total = 0;
// for (let i = 0; i < numbers.length; i++){
//     console.log(total+= numbers[i]);
// }

//while loop-convert for loop to while loop:
// for (let i = 0; i < 51; i++) {
//     console.log(i);
//  }

// let i = 0;
// while(i < 51){
//     console.log(i);
//     i++
// }

//What happens if you forget to include i++ at the end of the while loop above?infinite loop
//while loop is more flexible than for loop
// const input = require('readline-sync');

// let num = input.question('Please enter a positive number:');
// num = Number(num);

// while (num <= 0) {
//    num = input.question('Invalid input. Please enter a positive number:');
//    num = Number(num);
// }

//infinite loop
// let i = 0;

// while (i < 51) {
//    console.log(i);
// }

// let i = 0;

// while (i < 51) {
//    console.log(i);
//    i--;
// }

// let n = 10;
// let answer = 1;

// while (n > 0) {
//    answer = answer + n;
//    n = n + 1;
// }

// console.log(answer);

//
 
