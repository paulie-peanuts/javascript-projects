// Code your crewMass function here:
function massCrew (crew) {
  let mass = 0;
  for (let i=0; i < crew.length; i++) {
     mass += crew[i].mass;
     return Math.round(mass*10)/10;
  }
}

// Code your fuelRequired function here:
function fuelRequired(crew) {
    totalMass = massCrew(crew) + 75000;
    let fuel = 0
    for (let i=0; i < crew.length; i++) {
      if (crew[i].species === "dog" || crew[i].species === "cat") {
        fuel += 200;
      } else {
        fuel += 100;
      }
    }
    fuel += Math.round(9.5*totalMass);
    console.log(`The mission has a launch mass of ${totalMass} kg and requires ${fuel} kg of fuel.`);
    // return Math.round(9.5*totalMass);
}
function lowestO2 (arr) {
  let candidates = arr[0];
  for (let i=1; i < arr.length; i++) {
    if (arr[i].o2Used(1) < candidateA.o2Used(1)) {
      candidate = arr[i];
    }
  }
  return candidate;
}
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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

let crew = [candidateB,candidateD,candidateF];
//  console.log(massCrew(crew))
fuelRequired(crew);
console.log(lowestO2(crew));
// test1 = {1: ['a', 'b', 'c']}
// function testRun (test) {
  //   let newObject ={}
  //   for (value in test) {
    //     // for (let i=0; i<value[test].length; i++)
    //       // newObject.test[value[i]] = value[i];
//       let letters = test[value]
//       let number = value
//       console.log(letters)
//       for (i=0; i<letters.length; i++)
//         let newLetter = letters[i]
//         console.log(letters[i])
//         console.log(number)
//         newObject[newLetter] = number
//       let string = ""
//       // newObject[letters.split(",").slice(2)] = value
    
//   }
//   return newObject;
// }
// console.log(testRun(test1))