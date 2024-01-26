//make a diamond
//Steps to make a diamond
//1.make a rectangle
//1.a. make a line function
function makeLine(size){
    let line ="";
    for (let i=0; i < size;i++){
        line+= "#"
    }
    return line
}
console.log(makeLine(5))

console.log("..................")

//1.b. make a square function
function makeSquare(size){
    let square ="";
    for (let i=0; i < size;i++){
        square+= (makeLine(size)+"\n")
    }
    return square
}
console.log(makeSquare(5))


console.log("..................")

//1.c. make a rectangle function
function makeRectangle(width,height){
    let rectangle ="";
    for (let i=0; i < height;i++){
        rectangle+= (makeLine(width)+"\n")
    }
    return rectangle.slice(0,-1)
}
console.log(makeRectangle(5,3));

console.log("..................")

//2 make a triangle function
//2.a make a makeDownwardStairs
function makeDownwardStairs(height){
    let downstairs ="";
    for (let i=0; i < height;i++){
        downstairs+= (makeLine(i+1)+"\n")
    }
    return downstairs.slice(0,-1)
}
console.log(makeDownwardStairs(5));

console.log("..................")

//2.b make a makeSpaceLine function
function makeSpaceLine(numSpaces,numChars){
    let spaceLine ="";
        for (let i=0; i < numSpaces;i++){
        spaceLine += " "
    }
       spaceLine += makeLine(numChars)
      
    for (let i=0; i < numSpaces;i++){
        spaceLine += " " 
    }
    return spaceLine.slice(0,-1)
}
console.log(makeSpaceLine(3,5));

console.log("..................")

//2.b makeIsoscelesTriangle function
function makeIsoscelesTriangle(height){
    let triangle ="";
    for (let i=0; i < height;i++){
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
       }
    return triangle.slice(0,-1)
}
console.log(makeIsoscelesTriangle(5));

console.log("..................")

//2.b makediamond function
function makeDiamond(height){
    let diamond ="";
    //for (let i =0 ;i <=height; i++){
        diamond += makeIsoscelesTriangle(height)
      // }
return diamond.slice(0,-1)
}
console.log( makeDiamond(5));
console.log("..................")
function makeReverseIsoscelesTriangle(height){
    let triangle ="";
    for (let i=0; i < height;i++){
        triangle += (makeIsoscelesTriangle( 2*i , height -i  ) + "\n");
       }
    return triangle.slice(0,-1)
}
console.log(makeReverseIsoscelesTriangle(5));

console.log("..................")
//another way

// //make a diamond
// //Steps to make a diamond
// //1.make a rectangle
// //1.a. make a line function
// function makeLine(size,char){
//     let line ="";
//     for (let i=0; i < size;i++){
//         line+= char
//     }
//     return line
// }
// console.log(makeLine(5,"#"))

// console.log("..................")

// //1.b. make a square function
// function makeSquare(size,char){
//     let square ="";
//     for (let i=0; i < size;i++){
//         square+= (makeLine(size,char)+"\n")
//     }
//     return square.slice(0,-1)
// }
// console.log(makeSquare(5,"#"))


// console.log("..................")

// //1.c. make a rectangle function
// function makeRectangle(width,height,char){
//     let rectangle ="";
//     for (let i=0; i < height;i++){
//         rectangle+= (makeLine(width,char)+"\n")
//     }
//     return rectangle.slice(0,-1)
// }
// console.log(makeRectangle(5,3,"#"));

// console.log("..................")

// //2 make a triangle function
// //2.a make a makeDownwardStairs
// function makeDownwardStairs(height,char){
//     let downstairs ="";
//     for (let i=0; i < height;i++){
//         downstairs+= (makeLine((i+1),char)+"\n")
//     }
//     return downstairs.slice(0,-1)
// }
// console.log(makeDownwardStairs(5,"#"));

// console.log("..................")

//2.b make a makeSpaceLine function
// function makeSpaceLine(numSpaces,numChars,char){
//     let spaceLine ="";
//     for (let i=0; i < numSpaces;i++){
//         spaceLine += " "
//     }
//        spaceLine += makeLine(numChars,char)
      
//     for (let i=0; i < numSpaces;i++){
//         spaceLine += " " 
//     }
// return spaceLine
// }
// console.log(makeSpaceLine(3,5,"#"));

// console.log("..................")

//2.b makeIsoscelesTriangle function
// function makeIsoscelesTriangle(height,char){
//     let triangle ="";
//     for (let i =0; i < height;i++){
//         triangle += (makeSpaceLine((height - i - 1, 2*i + 1,char) + "\n"));
//        }
// return triangle.slice(0,-1)
// }
// console.log(makeIsoscelesTriangle(5,"#"));

// console.log("..................")

//2.b makediamond function
// function makeDiamond(height){
//     let diamond ="";
//     for (let i=0; i < height;i++){
//         triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
//        }
//     return triangle.slice(0,-1)
// }
// console.log(makeIsoscelesTriangle(5));


