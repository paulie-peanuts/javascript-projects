// Code your orbitCircumference function here:
function orbitCircumference(r) {
  return Math.round(2*(Math.PI) * r);
}
// console.log(orbitCircumference(2))
// let orbitsCompleted = 2
// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
  let time = orbitsCompleted*orbitCircumference(orbitRadius)/orbitalSpeed;
  // console.log(orbitCircumference(orbitRadius))
  // console.log(time)
  time = Math.round(time*100)/100;
  console.log(`The mission will travel ${orbitsCompleted*orbitCircumference(orbitRadius)} km around the planet, and it will take ${time} hours to complete.`)

  return time;
}
// missionDuration(5, 50000, 50000);
  // console.log(`The mission will travel ${orbitsCompleted*orbitCircumference} km around the planet, and it will take ${missionDuration()} hours to complete.`)
// console.log(missionDuration())
// Copy/paste your selectRandomEntry function here:
let selectRandomEntry = function(array) {
  return array[Math.floor(Math.random()*array.length)];
}
// let orbitsCompleted = 5
// orbitRadius = 20000000
// orbitalSpeed = 280000000
// Code your oxygenExpended function here:
function oxygenExpended(object, orbitsCompleted, orbitRadius, orbitalSpeed) {
  // let o2Use = object.o2Used(missionDuration(3))
  let duration = missionDuration(orbitsCompleted, orbitRadius, orbitalSpeed)
  let oUse = Math.round(object.o2Used(missionDuration(orbitsCompleted, orbitRadius, orbitalSpeed))*1000)/1000
  console.log(`${object.name} will perform the spacewalk, which will last ${duration} hours and require ${oUse} kg of oxygen.`)
  // return Math.round(o2Used*1000)/1000;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 oxygenExpended(candidateA, 5, 2000, 28000)

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
 
 let crew = [candidateA,candidateC,candidateE];
 