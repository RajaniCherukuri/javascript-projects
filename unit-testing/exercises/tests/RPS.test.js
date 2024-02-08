const whoWon = require("../RPS.js")

describe("whoWon solution",function(){
    test("Returns message-'TIE!',when both players choose same option",function(){
       let output = whoWon.whoWon ('rock','rock');
        expect(output).toEqual('TIE!')
    })
    test("Returns message-'Player 2 wins!',when both players choose different option-if P1 = rock & P2 = paper.",function(){
        let output = whoWon.whoWon ('rock','paper');
         expect(output).toEqual('Player 2 wins!')
     })
     test("Returns message-'Player 2 wins!',when both players choose different option-if P1 = paper & P2 = scissors.",function(){
        let output = whoWon.whoWon ('paper','scissors');
         expect(output).toEqual('Player 2 wins!')
     })
     test("Returns message-'Player 2 wins!',when both players choose different option-if P1 = scissors & P2 = rock.",function(){
        let output = whoWon.whoWon ('scissors','rock');
         expect(output).toEqual('Player 2 wins!')
     })
     test("Returns message-'Player 1 wins!',when both players choose different option-if P1 = rock & P2 = scissors.",function(){
        let output = whoWon.whoWon ("rock","scissors");
         expect(output).toEqual('Player 1 wins!')
     })
     test("Returns message-'Player 1 wins!',when both players choose different option-if P1 = pencil & P2 = color.",function(){
        let output = whoWon.whoWon ("pencil","color");
         expect(output).toEqual('Player 1 wins!')
     })
  
  
});
