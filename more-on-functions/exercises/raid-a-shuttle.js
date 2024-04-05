function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];



// Steal some fuel from the shuttle:
 

//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.
let fuelSecondary = function (a) {
  if (checkFuel(a) === 'green') {
    let stolen = a - 100001;
    console.log(`Secretly stealing ${stolen} of fuel`)
    // a = a - stolen;
    return stolen; 
  } else if (checkFuel(a) === 'yellow') {
    return a - 50001;
  } else {
    return a; 
  }

};
// console.log(fuelLevel);
// fuelLevel = fuelLevel - (fuelSecondary(fuelLevel));
// let stolenFuel = fuelSecondary(fuelLevel)
// console.log(stolenFuel)

// console.log(`${fuelSecondary(fuelLevel)}`)
// console.log(typeof(fuelSecondary))
//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.
// console.log(fuelSecondary(fuelLevel));
// console.log(fuelLevel);
// console.log(checkFuel(fuelLevel));
//d). Decide where to best place your function call to gather our new fuel.

// Next, liberate some of that glorious cargo.


//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
let cargoSecondary = function(array) {
  let a = []
  a.push(array[array.indexOf('satellite')], array[array.indexOf('gold')]);
  array.splice(array.indexOf('satellite'), 2, 'coal', 'wood');
  // console.log(array);
  // console.log(`Secretly stealing a ${a[0]} and ${a[1]} while replacing with ${array[array.indexOf('coal')]} and ${array[array.indexOf('wood')]}`);
  // console.log(a)
  return a
}
// cargoSecondary(cargoHold)
//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.
console.log(fuelLevel)
//d). Don’t get hasty, matey! Remember to test your function.

// Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
let irs = function(levelOfFuel, itemsInCargo) {
  let arr = cargoSecondary(itemsInCargo);
  // fuelLevel = fuelLevel - fuelSecondary(fuelLevel)
  return /*`Raided ${fuelSecondary(fuelLevel)} kg of fuel from the tanks, and */`secretly stole a ${arr[0]} and ${arr[1]} while replacing with ${itemsInCargo[itemsInCargo.indexOf('coal')]} and ${itemsInCargo[itemsInCargo.indexOf('wood')]}`
 }
fuelLevel = fuelLevel - fuelSecondary(fuelLevel);
console.log(irs(fuelLevel, cargoHold));

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
console.log(fuelLevel);
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."

// console.log("2" + "2");


// console.log("3" == 3, "3" === 3);

// const input = require('readline-sync');

// let fee = 5;
// let amount = input.question("Enter the purchase amount: ");
// console.log(typeof(fee))
// console.log(typeof(amount))
// let total = fee + amount;
// console.log("The final amount with service fee is: " + total);
// console.log(typeof(fee))
// console.log(typeof(amount))
// console.log(typeof(total))

// let g = 100 + 200 * 4/2 + 20;
// console.log(g);

// let b = 21;
// if (b > 20) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let a = 21;
// console.log(a > 20);

// let x = 4;
// let y = 6;

// console.log((x > 2 && 6 > 4) || y < 2);

// let str = "ab";
// console.log(`${str[0]}\n${str[str.length - 1]}`);

// arr = [5, 6, 7];
// for (let i=0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let i=arr.length-1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let j = 0;

// while (j < 10) {
//   console.log(j);
//   j++;
// }

// let txt = "hi"
// function punctuate(txt) {
//   console.log(txt + ".");
// }
// punctuate(txt)

// function addTen(i) {
//   i += 10;
//   return i;
// }

// let i = 17;
// console.log(console.log(addTen(i), i) === console.log(`27 17`));

// console.log("false" == false)
// console.log(true == false)