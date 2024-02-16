// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

// class Astronaut {
//    constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//    }
// }

// let tortoise = new Astronaut('Speedy', 120);

//console.log(tortoise.name, tortoise.age, tortoise.mass);
// console.log(tortoise.name, tortoise.age, tortoise.mass,tortoise.weight);
// console.log(Astronaut)

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

//Practice
// class Car {
//   constructor(make, model, year, color, mpg){
//      this.make = make;
//      this.model = model;
//      this.year = year;
//      this.color = color;
//      this.mpg = mpg;
//   }
// }

// let testlaCar = new Car("Tesla","Tesla2",2024,"grey",50)
// console.log(testlaCar.make);
// let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20)
// console.log(typeof myCar.year);
// let myCar = new Car('Tesla', 'Model S', 2019)
// console.log(myCar)

	
//assigning method outside constructor
// class Astronaut {
//   constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//   }

//   reportStats() {
//      let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//      return stats;
//   }
// }

// let fox = new Astronaut('Fox', 7, 12);
// console.log(fox.reportStats());

//assigning method inside constructor
// class Astronaut {
//   constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//      this.reportStats = function() {
//         let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//         return stats;
//      }
//   }
// }

// let fox = new Astronaut('Fox', 7, 12);

// console.log(fox.reportStats());

//quiz
class Plant {
  constructor(type, height) {
     this.type = type;
     this.height = height;
  }

  grow() {
     this.height = this.height + 1;
     return this.height
  }
}
let rosePlant = new Plant("rose",2)
console.log(rosePlant)
console.log(rosePlant.grow())
