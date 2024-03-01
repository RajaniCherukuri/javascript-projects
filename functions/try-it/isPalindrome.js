function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
console.log(isPalindrome("kayak"));
console.log(isPalindrome("LaunchCode"));


// function reverse(str) {
//    let lettersArray = str.split('');
//    let reversedLettersArray = lettersArray.reverse();
//    return reversedLettersArray.join('');
// }

// function isPalindrome(str) {
//    return reverse(str) === str;
// }
// console.log(isPalindrome("kayak"));
// console.log(isPalindrome("LaunchCode"));


// function makeSandwich( /*parameters*/ ) {
//    // make the sandwich
// }

// function pourDrink( /*parameters*/ ) {
//    // pour the drink
// }

// function makeLunch( /*parameters*/ ) {
//    makeSandwich( /*parameters*/ );
//    pourDrink( /*parameters*/ );
// }



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


//a variable defined using let within a function is not visible outside of that function.
// function removeHyphens(str) {
//    let strWithoutHyphens = ''

//    for (let i = 0; i < str.length; i++) {
//    if (str[i] !== '-') {
//        strWithoutHyphens += str[i];
//    }
//    }

//    return strWithoutHyphens;
// }

// let launchCodePhone = "314-254-0107";
// console.log(removeHyphens(launchCodePhone));
// //console.log(strWithoutHyphens);


//variable shadowing-a variable defined outside the function may be visible within the function.
// let message = "Hello, World!";

// function printMessage() {
//     console.log(message);
// }

// printMessage();
// message = "Goodbye";
// printMessage();

//This phenomenon is called shadowing, based on the metaphor that a function parameter “casts it’s shadow over” a variable of the same name, effectively hiding it.
// let message = "Hello, World!";
// function printMessage(message) {
//     console.log(message);
// }

// printMessage("Goodbye");


// let num = 42;

// function isEven (num) { 
//     return num % 2 === 0; 
// }

// console.log(isEven(43));

// function calculateAreaOfCircle(radius) {
//    let area = Math.PI * radius**2;
//    return area;
// }
// console.log(calculateAreaOfCircle(10));

let str = "Hello world, welcome to the universe.";
console.log(str.indexOf("welcome"));
console.log(str.indexOf("e",5));
console.log(str.replace("universe","home"))
console.log(str.slice(0,5))
console.log(str.charCodeAt(5))

