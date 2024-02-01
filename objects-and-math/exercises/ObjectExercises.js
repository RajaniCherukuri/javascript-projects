let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 4
};

let tardigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
// superChimpOne["astronautId"] = Math.floor(Math.random()*10)
// salamander["astronautId"] = Math.floor(Math.random()*10)
// superChimpTwo["astronautId"] = Math.floor(Math.random()*10)
// beagleOne["astronautId"] = Math.floor(Math.random()*10)
// tardigradeOne["astronautId"] = Math.floor(Math.random()*10)

superChimpOne["astronautId"] = 1
salamander["astronautId"] = 2
superChimpTwo["astronautId"] = 3
beagleOne["astronautId"] = 4
tardigradeOne["astronautId"] = 5

superChimpOne["move"] = function(){return Math.floor(Math.random()*11)}
salamander["move"] = function(){return Math.floor(Math.random()*11)}
superChimpTwo["move"] = function(){return Math.floor(Math.random()*11)}
beagleOne["move"] = function(){return Math.floor(Math.random()*11)}
tardigradeOne["move"] = function(){return Math.floor(Math.random()*11)}

 console.log(superChimpOne)
// console.log(salamander)
// console.log(superChimpTwo)
// console.log(beagleOne)
// console.log(tardigradeOne)

// Create an array to hold the animal objects.
let crew = [superChimpOne,salamander,superChimpTwo,beagleOne,tardigradeOne]
//console.log(crew)

// // Print out the relevant information about each animal.
function crewReports(animal){
      return (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautId}.`)
   }
   console.log(crewReports(beagleOne))


// Start an animal race!
// function fitnessTest(arr){

// }


function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(crew))

 
