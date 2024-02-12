function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let result;
    let lab = labs[i];
    try{
    result = lab.runLab(3);
    }catch (TypeError){
    console.log("Error Thrown");
    console.log("You have named the function incorrectly.");
    }finally{
    console.log(`${lab.student} code worked: ${result === 27}`);
    }
  }
}

// let studentLabs = [
//   {
//     student: 'Carly',
//     runLab: function (num) {
//       console.log( Math.pow(num, num))
//         return Math.pow(num, num);
//     }
//   },
//   {
//     student: 'Erica',
//     runLab: function (num) {
//       console.log( num * num)
//         return num * num;
//     }
//   }
// ];

// gradeLabs(studentLabs);


let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);