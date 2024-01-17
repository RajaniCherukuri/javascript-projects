//Create an array called practiceFile with the following entry: 273.15
let practceFile = [273.15];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
console.log(practceFile.push(42));
console.log(practceFile);
console.log(practceFile.push("hello"));
console.log(practceFile);

//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
console.log(practceFile.push(false,-4.6,87));
console.log(practceFile);


// let languages; //declare arrays
// languages = ["Python",
//              "Java",
//              "Javascript",
//              "C#"];//intialise arrays
// console.log(languages);       

// let emptyArray = [];
// console.log(emptyArray.length);
// console.log(languages.length);//array length

// let grabBag = ["A string value", true, 99, 105.5];//varying data types
// console.log(grabBag);

// let classes = ["science, computer, art"];
// classes = ["science","computer","art"];
// console.log(classes.length);

// let teachers = ["Jones", "Willoughby", "Rhodes"];
// console.log(teachers.length);

// console.log(languages[0]);
// console.log(languages[3]);
// console.log(languages[4]);
// console.log(languages[-1]);
// console.log(languages[100]);

// let string = "JavaScript"
// console.log(string[-1]);

// let javaScriptFrameworks = ["React","Angular","Ember"];
// console.log(javaScriptFrameworks);
// javaScriptFrameworks[2] = "Vue";
// console.log(javaScriptFrameworks);//array is mutable.

//Array methods:
//array.includes()
// let charles = [1,2,3,4,5];
// let otherArray = ["hello","World!"];
// console.log(charles.includes(5));
// console.log(otherArray.includes("hi"));

//indexOf()
// console.log(charles.indexOf(5));
// console.log(otherArray.indexOf("hi"));
// console.log(otherArray.indexOf("hello"));

//reverse()
// let arr = ['At', 'banana', 'orange', 'apple', 'zoo'];
// console.log(arr.reverse());

//sort()-increasing order
// let letters = ['f', 'c', 'B', 'X', 'a'];
// letters.sort();
// console.log(letters);

// let mixed = ['a', 'A', 20, 40];
// mixed.sort();
// console.log(mixed);

// let numbers = [2, 8, 10, 400, 30];
// numbers.sort();
// console.log(numbers);

//push()-add elements to the array and pop()
// let arr1 = ["a","b","c"];
// console.log(arr1.push("d","f",42));
// console.log(arr1)//array is mutable

// let str1 = "JavaScript"
// console.log(str1.toUpperCase());
// console.log(str1);//strings are immutable

// let arr2 =["a","b","c","d","e"];
// arr2.pop("e");
// console.log(arr2); 

//shift() and unshift()
// let arr3 = ["a","b","c","d","e"];
// console.log(arr3.shift());
// console.log(arr3);

// let arr4 = ['a', 'b', 'c'];
// console.log(arr4.unshift('hello', 121));
// console.log(arr4);

//splice()
// let arr5 = ["a","b","c","d","e","f"];
// arr5.splice(2);
// console.log(arr5);

// let arr6 = ["a","b","c","d","e","f"];
// arr6.splice(2,3);
// console.log(arr6);

// let arr7 = ["a","b","c","d","e","f"];
// arr7.splice(2,0,"hello");
// console.log(arr7);

// let arr8 = ["a","b","c","d","e","f"];
// arr8.splice(2,0,"hello",9);
// console.log(arr8);


//concat()-add elements from different arrays
// let arr = [1,2,3];
// let otherArr = ["M","F","E"];
// let newArray =[];
// newArray = arr.concat(otherArr);
// console.log(newArray);

//join("connector")-combines all elements of an array into a string.
// let arr = [1, 2, 3, 4];
// let words = ['hello', 'world', '!'];
// let newString = '';
// newString = arr.join("+");
// newString = words.join("");
// newString = words.join("_");
// console.log(newString);

//slice()-copy range of elements from 1 array into new array and does not change the original array.
// let arr = ["a","b","c","d","e"];
// console.log(arr.slice(2));
// console.log(arr.slice(1,4));
// console.log(arr);

//split()
// let numbers = "1,2,3,4";
// let word = "Rutabaga";
// let phrase = "Bookkeeper of balloons."
// let arr = [];
// arr = numbers.split(',');
// arr = word.split("");
// arr = phrase.split(" ")
// console.log(arr);


// let charles = ['coder', 'Tech', 47, 23, 350];
// charles.sort();
// console.log(charles);

// let str = "Launch Code students rock!";
// console.log(str.split(" "));

// let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
// let selectedItems = [];
// selectedItems = groceryBag.slice(2, 5).sort();
// console.log(selectedItems);

//multi-dimentional arrays-it arrays of array i.e array within an array(1st-outer array-row and 2nd-inner array-column).
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];
// console.log(shuttleCrews[0][2]);
// console.log(shuttleCrews[1][1]);
// console.log(shuttleCrews[2][1]);

//multi-dimentional array method:
// let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];
// shuttleCrews.push(newCrew);
// console.log(shuttleCrews);
// console.log(shuttleCrews[3][2]);
// shuttleCrews[1].reverse();
// console.log(shuttleCrews[1]);
// console.log(shuttleCrews);

    // let school = [
    //     ["science", "computer", "art"],
    //     ["Jones", "Willoughby", "Rhodes"]
    // ];

    // console.log(school[1][0]);
    // console.log(school[0].push('dance'));
    // console.log(school[1].push('Holmes'));
    // //console.log(school[1].unshift('Holmes'));
    // console.log(school);

    // let phrase = 'Code for fun'
    // console.log(phrase[2])






