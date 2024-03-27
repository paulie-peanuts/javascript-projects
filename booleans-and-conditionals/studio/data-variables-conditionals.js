// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

let failText = "Shut down the launch operations!";
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log(failText);
} else if (astronautStatus !== "ready") {
    console.log(failText);
} else if (totalMassKg >= maximumMassLimit) {
    console.log(failText);
} else if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    console.log(failTest);
} else if (fuelLevel !== "100%") {
    console.log(failTest);
} else if (weatherStatus !== "clear") {
    console.log(failTest);
} else console.log (
    "All systems are a go! Initiating space shuttle launch sequence." +
    "\n---------------------------------------------------------------" +
    "\nDate: " + date + 
    "\nTime: " + time + 
    "\nAstronaut Count: " + astronautCount + 
    "\nCrew Mass: " + crewMassKg + " kg" + 
    "\nFuel Mass: " + fuelMassKg + " kg" + 
    "\nShuttle Mass: " + shuttleMassKg + " kg" + 
    "\nTotal Mass: " + totalMassKg + " kg" +
    "\nFuel Temperature: " + fuelTempCelsius + " degrees C" +
    "\nWeather Status: " + weatherStatus +
    "\n---------------------------------------------------------------" +
    "\nHave a safe trip astronauts!")

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions 
