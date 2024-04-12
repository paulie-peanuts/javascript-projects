
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development","Data Analysis","Liftoff"],
  launchOutput: function (number){
    let output = ''
    let object = {2: 'Launch', 3: 'Code', 5: 'Rocks'}
    // for () {

    // }
    if (number % 2 === 0) {
        output += 'Launch'
    }    
    if (number % 3 === 0) {
        output += 'Code'
    }    
    if (number % 5 === 0) {
        output += 'Rocks' 
    }   
    if (number % 15 === 0) {
        output = 'Code Rocks' 
    }        
    if (number % 30 === 0) {
        return 'LaunchCode Rocks!' 
    } 
    if (number % 10 === 0) {
        return 'Launch Rocks! (CRASH!!!!!)' 
    }   
    if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0) {
        return "Rutabagas! That doesn't work."
    }
    return output + "!"
}
}
console.log(launchcode.launchOutput(1))
module.exports = launchcode;

