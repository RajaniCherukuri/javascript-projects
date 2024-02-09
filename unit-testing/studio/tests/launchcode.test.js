// launchcode.test.js code:
const test = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  it('Returns value as "nonprofit" for the key organization',function(){
    expect(test.launchcode.organization).toBe("nonprofit")
  })
  it('Returns value as "Jeff" for the key executiveDirector',function(){
    expect(test.launchcode.executiveDirector).toBe("Jeff")
  })
  it('Returns value as 100 for the key percentageCoolEmployees',function(){
    expect(test.launchcode.percentageCoolEmployees).toBe(100)
  })
  it('Returns value as "Web Development", "Data Analysis" and "Liftoff" for the key programsOffered',function(){
    expect(test.launchcode.programsOffered[0]).toBe("Web Development")
    expect(test.launchcode.programsOffered[1]).toBe("Data Analysis")
    expect(test.launchcode.programsOffered[2]).toBe("Liftoff")
  })
  it('Returns length for the key programsOffered',function(){
    expect(test.launchcode.programsOffered.length).toBe(3)
  })

 
});