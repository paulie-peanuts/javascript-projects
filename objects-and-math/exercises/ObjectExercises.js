let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let bDog = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let jenkins = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let alwaysLate = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

let animals = [superChimpOne, salamander, bDog, jenkins, alwaysLate];
let astrIDs = []

for (let i=0; i < animals.length; i++) {
   newID = Math.floor(Math.random()*10) + 1;
   while (astrIDs.includes(newID)) {
      newID = Math.floor(Math.random()*10) + 1;
   }
   animals[i]['astronautID'] = newID;
   astrIDs.push(newID);
}

// Math.floor(Math.random()*11
function stepCount() {
   return Math.floor(Math.random()*11);
}
for (let i=0; i < 5; i++) {
   animals[i]['move'] = function() {return Math.floor(Math.random()*11)};
}
// console.log(astrIDs);
   // astrIDs.push(newID);
   // while (i>=1 && animals[i].astronautID === animals[i-1].astronautID) {
   //    animals[i]['astronautID'] = Math.floor(Math.random()*10) + 1
   // }
// animals[3]['astronautID'] = 8
// animals[4]['astronautID'] = 8
// for (let j=0; j < 4; j++) {
//    if (animals[j+1].astronautID === animals[j].astronautID) {
//    animals[j]['astronautID'] = Math.floor(Math.random()*10) + 1
//    }
// }



// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
function crewReports(array) {
for (let i=0; i < array.length; i++) {
   console.log(`${array[i].name} is a ${array[i].species}. They are ${array[i].age} years old and ${array[i].mass} kilograms. Their ID is ${array[i].astronautID}.`);
}
}
crewReports(animals);
console.log(animals);
// Print out the relevant information about each animal.

// Start an animal race!
function fitnessTest(array=[]) {
   let results = [];
   for (let i=0; i < array.length; i++) {
      let rounds = 0;
      let steps = 0;
      while (steps < 20) {
         steps += array[i].move();
         rounds++;
      }
      console.log(`${array[i].name} took ${rounds} turns to take 20 steps.`)
      results.push(rounds)
   }
   return results;
}
console.log(fitnessTest(animals))