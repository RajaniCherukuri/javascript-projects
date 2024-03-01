// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

//Here's the animals:
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your selectRandomEntry function here:
//let idNumbers = [291, 414, 503, 599, 796, 890];
// Here are ID numbers:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length)
  //console.log('index ='+index)
     return arr[index]
}

 let selectedTeam =[];
  let selectedId ;
  
  do{
       selectedId = selectRandomEntry(idNumbers);
       if (!selectedTeam.includes(selectedId))    
           selectedTeam.push(selectedId)
    }
    while ( selectedTeam.length<3)

console.log(selectedTeam)
