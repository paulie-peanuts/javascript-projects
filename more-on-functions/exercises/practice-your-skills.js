//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let triple = function(a) {
    if (typeof a === "number") {
        return a*3;
    } else if (typeof a === "string") {
        return "ARRR!";
    } else {
        return a;
    }
};
let mappedArray = arr.map(triple)
console.log(mappedArray)

const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
if (Number(userInput) < 0) {
    logger("Invalid input");
}
// console.log(logger())
// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function (n) {
    return n/2;
});

console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (n) {
    return n[0]
});

console.log(firstInitials);