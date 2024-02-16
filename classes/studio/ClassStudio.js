//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//Part 1
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

//Part2
    addScore(score){
       this.scores.push(score);
       return this.scores;       
    }
 //Part3 
    average(){
        let total = 0;    
        for (let i = 0; i < this.scores.length; i++)  
          total+= this.scores[i]      
          let avg = Math.round((total / this.scores.length)*10)/10        
          return avg
     }

  
addStatus(){
            if  (this.average() > 90){
               return "Accepted"
            }else if (this.average() >= 80 || this.average <= 89){
                return "Reserve"   
            }else if (this.average() >= 70 || this.average <= 79){
                return "Probationary" 
            }else if (this.average() < 70){
                return "Rejected"  
            }           
         }
    }

let crewCandidate1 = new CrewCandidate("Bubba Bear", 130, [88, 85, 90])
let crewCandidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let crewCandidate3 = new CrewCandidate("Glad Gato", 225, [75, 78, 62])

// console.log(crewCandidate1);
// console.log(crewCandidate2);
// console.log(crewCandidate3);
//console.log(crewCandidate1.addScore(83));
// console.log(crewCandidate2.average());
// console.log(crewCandidate1.addStatus());
// console.log(crewCandidate2.addStatus());
// console.log(crewCandidate3.addStatus());
// console.log(`'${crewCandidate1.name} earned an average test score of ${crewCandidate1.average()} % and has a status of ${crewCandidate1.addStatus()}.'`)
// console.log(`'${crewCandidate2.name} earned an average test score of ${crewCandidate2.average()} % and has a status of ${crewCandidate2.addStatus()}.'`)
// console.log(`'${crewCandidate3.name} earned an average test score of ${crewCandidate3.average()} % and has a status of ${crewCandidate3.addStatus()}.'`)


//Part4
let count=0;
while(crewCandidate3.addStatus() !=="Accepted"){
    let updatedScore =Math.round((Math.random()*100))
    if (updatedScore > 90){
    crewCandidate3.addScore(updatedScore);
    count++
    }
}
console.log(crewCandidate3.scores)
console.log(crewCandidate3.addStatus() +" after "+count+" times!!")

//Another method
//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores = []) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sumArray = 0;

        for (let i = 0; i < this.scores.length; i++) {
            sumArray += this.scores[i];
        }
        
        let rounded = Math.round((sumArray / this.scores.length)*10)/10;

        return rounded;
    }

    status() {
        if (this.average() >= 90){
            return "Accepted";
        } else if (this.average() >= 80) {
            return "Reserve";
        } else if (this.average() >= 70) {
            return "Probationary";
        } else if (this.average() < 70) {
            return "Rejected"
        }
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGater = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

let allCandidates = [bubbaBear, merryMaltese, gladGater];

// for (let i = 0; i < allCandidates.length; i++) {
//     console.log(`${allCandidates[i].name} earned an average test score of ${allCandidates[i].average()}% and has a status of ${allCandidates[i].status()}.`);
// }

// console.log(bubbaBear, merryMaltese, gladGater);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
// bubbaBear.addScore(83);

// console.log(bubbaBear.scores);

// console.log(merryMaltese.average());
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// while (gladGater.average() != 100) {
//     let nextScore = 1;

//     gladGater.scores.push()
// }
console.log(gladGater.status());
// let count = 0;

// while (gladGater.status() != "Reserve") {
//     gladGater.addScore(100);
//     count ++;
// }

let count1 = 0;

while (gladGater.status() != "Accepted") {
    gladGater.addScore(100);
    count1 ++;
}

console.log(gladGater.status());
console.log(`${allCandidates[2].name} took ${count1} more tests to reach the ${allCandidates[2].status()} status.`);
console.log(gladGater.scores);


