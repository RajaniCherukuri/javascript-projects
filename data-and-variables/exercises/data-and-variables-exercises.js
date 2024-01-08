// Declare and assign the variables below
let spaceShuttleName ="Determination";
console.log(spaceShuttleName);
let shuttleSpeedMph = 17500;
console.log(shuttleSpeedMph);
let distanceToMarsKm = 225000000;
console.log(distanceToMarsKm);
let distanceToMoonKm = 384400;
console.log(distanceToMoonKm);
const milesPerKm = 0.621;
console.log(milesPerKm)


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)


// Calculate a space mission below
let milesToMars = distanceToMarsKm*milesPerKm;
console.log(milesToMars);
let hoursToMars = milesToMars/shuttleSpeedMph;
console.log(hoursToMars);
let daysToMars = hoursToMars/24;
console.log(daysToMars);


// Print the results of the space mission calculations below
console.log(spaceShuttleName +" will take "  + daysToMars + " days to reach Mars.")


// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm*milesPerKm;
console.log(milesToMoon);
let hoursToMoon = milesToMoon/shuttleSpeedMph;
console.log(hoursToMoon);
let daysToMoon = hoursToMoon/24;
console.log(daysToMoon);


// Print the results of the trip to the moon below
console.log(spaceShuttleName +" will take "  + daysToMoon + " days to reach Moon.")