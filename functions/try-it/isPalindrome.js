function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
isPalindrome("LaunchCode")

//Practice:
//Function example:
// console.log("Hello World");

// let num = Number("42");
// console.log("The variable num is of type", typeof num, "and has value", num);

// let commaSeparatedValues = "Smith,Jane,100 Cherry Blossom Lane";
// let values = commaSeparatedValues.split(',');
// console.log(values);

// let x = 3;
// let y= 4 * x + 7;
// console.log(y);

// function sayHello(){
//    console.log("Hello World");
// }
// sayHello()

// let returnVal = console.log("LaunchCode");
// console.log(returnVal); //why returning undefined

//return value may be stored as a variable or just displayed and not stored-console.log
// let stringVal = String(42);
// console.log(String(42));

//undefined-a variable that has not been assined a value

//function example
// let names = ["Lena","James","Anna"];
// for (let i = 0; i < names.length;i++){
//    console.log(names[i]);
// }

// function printNames(names){
//    for (let i = 0 ;i < names.length ; i++){
//       console.log(names[i]);
//    }
// }
// printNames(["Lena","James","Anna"])

// function printArray(names){
//    for (i = 0; i <names.length; i++){
//       console.log(names[i]);
//    }
// }
// printArray(["Lena","John","Anna"]);
// console.log("------------")
// printArray(["Oranges","Apples","Pears"]);

//defining and calling function
// function sayHello(){
//    console.log("Hello World");
// }
// sayHello()

//function input and output
// function sumToN(n){
//    let sum = 0;
//    for (let i = 0; i<=n; i++){
//       sum += i;
      //console.log(sum);
//       }
//       //return(sum);
// }
//   console.log(sumToN(3));

//return statement terminates the function execution

// function pastThePointOfReturn(){
//    return "I am done";
//    console.log("This will not be printer");
// }
// console.log(pastThePointOfReturn());

// function countToN(){
//    let count = 1;
//    while(true){
//       if (count > n){
//         // return;
//       }
//       console.log(count);
//       count++;
//    }
// }


//boolean function returns boolean value
// function isEven(n){
//     if (n % 2 === 0){
//       return true;
//     }else{
//       return false;
//     }
// }
   // console.log(isEven(4));
   // console.log(isEven(7));
   //isEven(4)//-why I cant do this way??

//    function isEven(n) {
//       if (n % 2 === 0) {
//           return true;
//       }
//       return false;
//   }
//   //console.log(isEven(7));
//   isEven(4);

//   function isEven(n) {
//    return n % 2 === 0;
// }
//  console.log(isEven(7));

//argument are optional 
// function hello(name){
//    return `Hello ${name}`;
// }
// console.log(hello());

//default value for the parameter
// function hello(name = "World"){
//    return `Hello ${name}`;
// }
// console.log(hello());

// function hello(name,age){
//    return `Hello ${name} of age ${age}`;
// }
// console.log(hello("Rajani"));

//you can give more arguments than required
// function hello(name = "World") {
//    return `Hello, ${name}!`;
// }

// console.log(hello("Jim", "McKelvey"));


// function plusTwo(num) {
//    return num + 2;
// }

// let a = 2;

// for (let i=0; i < 4; i++) {
//    a = plusTwo(a);
//    //console.log(a)
// }
// console.log(a);

// function sayHello() {
//    console.log("Hello, World!");
// }
// sayHello();

// function repeater(str) {
//    let repeated = str + str;
//    console.log(repeated);
// }
// repeater('Bob');

// function repeater(str) {
//    let repeated = str + str;
//    console.log(repeated);
   
// }

// repeater('Bob');//what is the difference between return and output??


// let num = 42;

// function isEven (num) { 
//     return num % 2 === 0; 
// }

// console.log(isEven(43))
