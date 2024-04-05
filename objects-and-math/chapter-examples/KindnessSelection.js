function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
//  Experiment with the code above. Try to:
//  a) Print 3 random selections from each array.
for (i=0; i<3; i++) {
  console.log(randomSelection(happiness));
}
for (i=0; i<3; i++) {
  console.log(randomSelection(words));
}
console.log('new-------');
 //b) Have the code randomly pick one array, and then print 2 random items from it.
let total = [happiness, words];
// for (i=0; i<2; i++) {
arrRandom = randomSelection(total);
for (i=0; i < 2; i++) {
  console.log(randomSelection(arrRandom));
}
// }
// console.log(randomSelection(total));
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 let arrNew = []
 for (i=0;i < 1; i++) {
  arrNew.push(randomSelection(words), randomSelection(happiness));
 }
 console.log(arrNew);