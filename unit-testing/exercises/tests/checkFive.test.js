const test = require("../checkFive.js")

describe("checkFive solution",function(){
    it("Returns message-'number is less than 5',when the number entered is less than 5",function(){
       let output = test.checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    })
    it("Returns message-'number is greater than 5',when the number entered is less than 20",function(){
        let output = test.checkFive(20);
         expect(output).toEqual("20 is greater than 5.")
     })
     it("Returns message-'number is equal to 5',when the number entered is 5",function(){
        let output = test.checkFive(5);
         expect(output).toEqual("5 is equal to 5.")
     })
});

