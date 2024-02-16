//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, weight){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.weight = weight;
   }
}

let fox = new Astronaut('Fox', 7, 12, 75);

console.log(fox);
console.log(fox.age, fox.color, fox.weight);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

//Practice
// let fox = {
//   name: 'Fox',
//   age: 7,
//   mass: 12,
//   catchPhrase: function(repeats) {
//      let phrase = 'LaunchCode';
//      for (let i = 0; i < repeats; i++) {
//         phrase += ' Rocks';
//      }
//      return phrase;
//   }
// }

// console.log(`${fox.name} is ${fox.age} years old and has a mass of ${fox.mass} kg.`);
// console.log(`${fox.name} says, "${fox.catchPhrase(3)}."`);