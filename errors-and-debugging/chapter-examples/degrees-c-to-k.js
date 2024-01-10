// const input = require('readline-sync');

// let degreesC = input.question('Temp in degrees C: ');
// let degreesK = degreesC + 273.15;

// console.log('Degrees K:', degreesK);

const input = require('readline-sync');

// const input = require('readline-sync');

// let degreesC = input.question('Temp in degrees C: ');
// degreesC = Number(degreesC);
// let degreesK = degreesC + 273.15;

// console.log('Degrees K:', degreesK);

let degreesC = Number(input.question('Temp in degrees C: '));
// console.log(degreesC)
// console.log(typeof degreesC)
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);
