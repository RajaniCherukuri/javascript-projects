function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}

console.log(reverse("LaunchCode"));

//Practice

// console.log(typeof 42);
// console.log(typeof "LC101");
// console.log(typeof Number); 

// function hello() {

//   // function body
// }

// let helloFunc = hello;

//anonymous function
// let add = function(a,b){
//   return a+b;
// };
// console.log(add(1,2));

// function reverse(str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }

// let reversedLettersArray =function(str){
//   return str.split("").reverse().join('');
// };
// console.log(reversedLettersArray("LaunchCode"));

// console.log(reversedLetterArray("LaunchCode"));//not working

// let f1 = function(str) {
//   return str + str;
// };

// let f2 = f1;
// console.log(f1("abcd"));
// //console.log(function("abcd"));
// console.log(f2("abcd"));





