let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(',');
console.log(cabinet1);
let cabinet2 = equipment.split(',');
console.log(cabinet2);
let cabinet3 = pets.split(',');
console.log(cabinet3);
let cabinet4 = sleepAids.split(',');
console.log(cabinet4);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(cabinet1,cabinet2,cabinet3,cabinet4);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
console.log(cargoHold[0],
    cargoHold[1],
    cargoHold[2]);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
