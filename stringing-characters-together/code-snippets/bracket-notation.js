// let jsCreator = "Brendan Eich";

// console.log(jsCreator[-1]);
// console.log(jsCreator[42]);

// let jsCreator = "Brendan Eich";
// let firstInitial = jsCreator[0];
// let lastInitial = jsCreator[8];
// let outputStr = "Javascript was created by somebody with intials " + firstInitial +"." + lastInitial + ".";
// console.log(outputStr)

//What does an expression using bracket notation evaluate to when the index is invalid (the index does not correspond to a character in the string)?
//it shows message "undefined"

// let phrase = "Code for fun";
// console.log(phrase[2]);

// let myStr = "Index";
// console.log(myStr[2]);
// console.log(myStr[4]);
// console.log(myStr[6]);
// console.log(myStr[0]);

// let phrase = "JavaScript rocks!"
// console.log(phrase[phrase.length-8]);

// let firstName = "Grace";
// let lastName = "Hopper";
// console.log(firstName,"has",firstName.length, "Characters");
// console.log(lastName,"has",lastName.length, "Characters");

// let nonprofit = "LaunchCode";
// console.log(nonprofit.toLowerCase());
// console.log(nonprofit);
// nonprofit = nonprofit.toLowerCase();
// console.log(nonprofit);

// let word = "Rutabaga";
// console.log(word.length);
// console.log(word[8]);

// cityName = "Vienna";
// stateName = "Virginia";
// location = cityName + "," + stateName;
// console.log(location.length);

// let nonprofit = "Launchcode";
// console.log(nonprofit);
// nonprofit[6] = "C";
// console.log(nonprofit);
// //string/object immutability i.e cannot change the value of the chararcter in a string.

// let pet = "cat";
// console.log(pet + 's');
// console.log(pet);
// pet += 's';
// console.log(pet);

// let nonprofit = "LaunchCode";
// console.log(nonprofit.toLowerCase());
// console.log(nonprofit.indexOf("u"));
// console.log(nonprofit.toUpperCase());
// console.log(nonprofit.trim());
// console.log(nonprofit.replace("C","K"));
// console.log(nonprofit.slice(2,7));

// let language = "JavaScript";
// language.replace("J","Q");
// language.slice(0,5);
// console.log(language);
//JavaScript

// let language = "JavaScript";
// console.log(language.replace("J","Q").slice(0,5));
//console.log(language.slice(0,5));
// console.log(language);

// let language = "JavaScript";
// console.log(language.slice(1,6));

// let org = "  The LaunchCode Foundation ";
// let trimmed = org.trim();
// console.log(trimmed);

// let nonprofit = "LaunchCode";
// console.log(nonprofit.charCodeAt(0));
// console.log(nonprofit.charCodeAt(1));
// console.log(nonprofit.charCodeAt(2));
// console.log(nonprofit.charCodeAt(3));
// console.log(nonprofit.charCodeAt(4));
// console.log(nonprofit.charCodeAt(5));
// console.log(nonprofit.charCodeAt(6));
// console.log(nonprofit.charCodeAt(7));
// console.log(nonprofit.charCodeAt(8));
// console.log(nonprofit.charCodeAt(9));

// let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

// let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
//                 + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
//                 + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
//                 + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
//                 + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

// console.log(characters);

//special characters:\n,\t
// console.log("A message \n broken across line,\n\t and intended.")

// console.log("The interbong character, \u203d, combines ? and !")
// console.log("\" The dog's favourite toy is a stuffed hedgehog,\" said Chris")
// console.log("Launch \nCode")


// let name ="Jack"
// let currentAge = 9
// console.log("Next year," + name + " will be " +(currentAge +1) +"." )
// console.log(`Next year,${name} will be ${currentAge +1}.`)


	

// let poem = `The mind chases happiness.
// The heart creates happiness.
// The soul is happiness
// And it spreads happiness
// All-where.

// – Sri Chinmoy`;

// console.log(poem);

let pluralNoun = "programs";
let name = "Anna";
let verb ="play" ;
let adjective ="tricky" ;
let color = "ember";

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")
console.log(`JavaScript provides a ${color} collection of tools-including ${adjective} syntax and ${pluralNoun} -that allows ${name} to ${verb} with strings.`)
