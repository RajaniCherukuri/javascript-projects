// let tortoiseOne = {
//    species: "Galapagos Tortoise",
//    name: "Pete",
//    weight: 919,
//    age: 85,
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };

// // Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
// for(item in tortoiseOne){
//    console.log(item + "," + tortoiseOne[item])
// }

// for(key in tortoiseOne){
//    console.log(tortoiseOne[key])
// }

// for(value in tortoiseOne){
//    console.log(tortoiseOne[value])
// }

console.log("-------------------------------------------------")
// //practice
// //Access properties of an object:bracket notation and dot notation
// console.log(tortoiseOne["name"]);
// console.log(tortoiseOne.name);
console.log("-------------------------------------------------")
// //modifying properties of an object:bracket notation and dot notation
// tortoiseOne["weight"] = tortoiseOne.weight + 10
// console.log(tortoiseOne)
console.log("-------------------------------------------------")
// tortoiseOne.weight = tortoiseOne.weight + 10
// console.log(tortoiseOne)

// console.log(tortoiseOne.weight);
console.log("-------------------------------------------------")
//    newWeight = tortoiseOne.weight + 10;

//    tortoiseOne["weight"] = newWeight;

//    console.log(tortoiseOne["weight"]);
console.log("-------------------------------------------------")
//    //add new ket:value pair using bracket syntax:
//    tortoiseOne["speed"] = "Faster than hare";
//    tortoiseOne["age"] = 120
//    console.log(tortoiseOne)
console.log("-------------------------------------------------")
//    let tortoiseTwo = {
//       species: "Galapagos Tortoise",
//       name: "Pete",
//       weight: 919
//   };

//   console.log(tortoiseTwo);
console.log("-------------------------------------------------")
//   tortoiseTwo["age"] = 120;
//   tortoiseTwo["speed"] = 'Faster than the hare.'

//   console.log(tortoiseTwo);
//   console.log(tortoiseTwo.age);
console.log("-------------------------------------------------")
// let tortoiseThree = {
//    species: "Galapagos Tortoise",
//    name: "Pete",
//    weight: 919,
//    age: 85,
//    diet: ["pumpkins", "lettuce", "cabbage"],
//    sign: function() {
//        return this.name + " is a " + this.species;
//    }
// };
// console.log(tortoiseThree)

console.log("-------------------------------------------------")
//add a function to increase the age of giraffe on his birthday
//   let giraffe = {
//    species: "Reticulated Giraffe",
//    name: "Cynthia",
//    weight: 1500,
//    age: 15,
//    diet: "leaves",
//    birthday:function(){this.age = this.age+1;return this.age + "has increased by one"
//    }

//  };
//  console.log(giraffe)
//  console.log(giraffe.birthday)
console.log("-------------------------------------------------")

//objects are not stored based on properties or value but by reference(i.e location in memory)
//  let tortoiseOne = {
//    species: "Galapagos Tortoise",
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };

// let tortoiseTwo = {
//    species: "Galapagos Tortoise",
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };

// console.log(tortoiseOne === tortoiseTwo);
console.log("-------------------------------------------------")
//Iterating through array

// let fruits = ["apple","mongoes","bananas","oranges"]

// function loopThroughArray(arr){
//       for(let i = 0; i < arr.length; i++){
//              console.log(arr[i]);
            
//    }
// }
// console.log(loopThroughArray(fruits));

console.log("-------------------------------------------------")

// let giraffe = {
//    species: "Reticulated Giraffe",
//    name: "Cynthia",
//    weight: 1500,
//    age: 15,
//    diet: "leaves"
//  };

//  function birthday(animal) {
//      animal.age = animal.age + 1;
//      return animal;
//  }

//  console.log(giraffe.age);

//  birthday(giraffe);

//  console.log(giraffe.age);

console.log("-------------------------------------------------")

// let tortoiseOne = {
//    age: 150,
//    species: "Galapagos Tortoise",
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };

// let tortoiseTwo = {
//    age: 150,
//    species: "Galapagos Tortoise",
//    diet: ["pumpkins", "lettuce", "cabbage"]
// };
// console.log(tortoiseOne == tortoiseTwo);
// console.log(tortoiseOne === tortoiseTwo);
// console.log(tortoiseOne.age === tortoiseTwo.age);

console.log("-------------------------------------------------")
// console.log(Math.PI);
// console.log(Math.PI * 4);
// console.log(Math.PI + Math.PI);
// Math.PI = 1234
// console.log(Math.PI)

console.log("-------------------------------------------------")
//different math methods
//math.abs(number)
// let num =Math.abs(-3)
// console.log(num);
// console.log(Math.abs(4.44));
// console.log(Math.abs("-3.33"));
// console.log(Math.abs(24/-3));

// let numbers = [-2, 3, -4.44, "8.88"];

//    let positiveArray = numbers.map(Math.abs);

//    console.log(positiveArray);

// console.log("-------------------------------------------------")
// console.log(Math.ceil(8.88));

// console.log(Math.ceil(8.1));

// console.log(Math.ceil(-3.9));

// console.log(Math.ceil(5));

// console.log(Math.floor(8.88));

// console.log(Math.floor(8.1));

// console.log(Math.floor(-3.9));

// console.log(Math.floor(5));

// console.log(Math.trunc(8.88));

// console.log(Math.trunc(10.000111));

// let numbers = [-2, 3.33, -4.44, 8.88];

// console.log(numbers.map(Math.ceil));
// console.log(numbers.map(Math.floor));
// console.log(numbers.map(Math.trunc));
// console.log("-------------------------------------------------")

// //math.min and math.max
// console.log(Math.max(2, 3, 100.01, 0, -5.2, 100));
// console.log(Math.min(2, 3, 100.01, 0, -5.2, 100));

// let numbers = [-2, 3.33, -4.44, 8.88];
// //method1
// let sortedArray = numbers.sort(function(a, b){return a-b});

// console.log(sortedArray);
// console.log(`Min = ${sortedArray[0]}, Max = ${sortedArray[sortedArray.length-1]}`);

// //method2

// let sortedArray1 = numbers.sort(function(a, b){return b-a});

// console.log(sortedArray);
// console.log(`Max = ${sortedArray1[0]}, Min = ${sortedArray1[sortedArray1.length-1]}`);

// //method3

// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(...numbers);
// console.log(`Min = ${min}, Max = ${max}`)

// //math.pow
// console.log(2**3);
// console.log(Math.pow(2,3));

// //math.sqrt
// console.log(Math.sqrt(81));

// let numbers = [2, 16, 100, 121];

// console.log(numbers.map(Math.sqrt));
// console.log("-------------------------------------------------")

//math.random

// for(let i = 0; i < 5; i++){
//    let randomNum = Math.random()*10;
//    console.log(randomNum);
// }

// for(let i = 0; i < 5; i++){
//    let randomNum = Math.round(Math.random()*10);
//    console.log(randomNum);
// }

// for (i=0; i < 5; i++){
//    let num = Math.random()*10;
//    console.log(`floor = ${Math.floor(num)}, ceil = ${Math.ceil(num)}, round = ${Math.round(num)}`);
   
// }
// console.log("-------------------------------------------------")

// console.log(Math.round(1.33));
// console.log(Math.round(-28.7));
// console.log(Math.round(8.5));
// console.log(Math.round("101.45"));

// console.log("-------------------------------------------------")
// console.log(Math.floor(-3.87));
// console.log(Math.random(-3.87));
// console.log(Math.round(-3.87));
// console.log(Math.trunc(-3.87));

// console.log("-------------------------------------------------")

// let num = Math.floor(Math.random()*10);

//    console.log(num);


   // let num = Math.round(Math.random()*10);

   // console.log(num);
// console.log("-------------------------------------------------")
   // console.log(Math.round(5.56789123*100)/100);
   // console.log(Math.round(556.789123)/100);
   // console.log(557/100)

   // console.log(Math.round(12.3456789)*100/100)
   // console.log(Math.round(12.3456789*100)/100)
   // console.log(Math.round(12.3456789*10000)/10000)
   // console.log(Math.round(12.3456789)*10000/10000)

// console.log("-------------------------------------------------")
   // let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];
   // function randomSelection(arr){
   //    let index = Math.floor(Math.random()*arr.length);
   //    return arr[index];
   // }
   // for (i=0; i < 8; i++){
   //    console.log(randomSelection(happiness));
   // }




