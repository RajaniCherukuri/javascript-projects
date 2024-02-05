function isPalindrome(str){
    return str === str.split('').reverse().join('');
    
}
//console.log(isPalindrome("LaunchCode"));


function evenOrOdd(num){
    if (num%2===0){
        return "Even";
    } else {
        return "Odd";
    }
}
//console.log(evenOrOdd(10));

function randomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}
//console.log(randomArrayElement([1,2,3,10]))

//export single function
//module.exports = isPalindrome;

//export multiple function
module.exports = {
    isPalindrome: isPalindrome,
    evenOrOdd: evenOrOdd,
    randomArrayElement: randomArrayElement
}