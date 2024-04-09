// Code your selectRandomEntry function here:
let selectRandomEntry = function(array) {
  return array[Math.floor(Math.random()*array.length)];
}

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];
console.log(selectRandomEntry(idNumbers))


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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
// let astrIDs = []
// Code your template literal and console.log statements:
// students = ["kyle", "paul", "logan", "teresa", "meghan", "eggy", "jack"]
// for (let i=0; i < 7; i++) {
//   newID = Math.floor(Math.random()*10) + 1;
//   while (astrIDs.includes(newID)) {
//      newID = Math.floor(Math.random()*10) + 1;
//   }
//   students[i]['astronautID'] = newID;
//   astrIDs.push(newID);
// }
// console.log(astrIDs)
// for (let i=0; i <animals.length, i++) {}
let goingToSpace = [];
while (goingToSpace.length < 3) {
  let newValue = selectRandomEntry(idNumbers);
    if (!goingToSpace.includes(newValue)) {
      goingToSpace.push(newValue);
      console.log (`added ${newValue}`)
  }
}
console.log(goingToSpace);
let candidateNames = [];
for (let i=0; i <animals.length; i++) {
  if (goingToSpace.includes(animals[i].astronautID)) {
    candidateNames.push(animals[i].name)
  }
}
// console.log(candidateNames);
console.log(`${candidateNames[0]}, ${candidateNames[1]}, and ${candidateNames[2]} are going to space!`)
//   for (let i=0; i < animals.length; i++)
//     if (idNumbers.includes(animals[i].astronautID)) {
//       goingToSpace.push(animals[i]);
//     }
// } 
// console.log(goingToSpace)
