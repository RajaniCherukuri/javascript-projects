let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let convertToFirstInitials = function(n){
    return n[0];
}
let firstInitials = names.map(convertToFirstInitials);

console.log(firstInitials);
