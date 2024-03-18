// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget"); // created a variable with missionTarget id.
    missionTarget.innerHTML = // This will update the data with given info. this updated from JSON data.
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
}
 
// validate function working- validateInput() will be used to complete the formSubmission() function.
function validateInput(testInput) {
    if (testInput === "") { //if the string then return Empty
        return "Empty";
    } else if (isNaN(testInput)) { //if the isNAN true then return Not a Number
        return "Not a Number"
    } else { //if isNAN false the false then is a number
        return ("Is a Number")
    }  
};
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    // Creating variable for the getting Id for further manipulations- 
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');

    let readyToLaunch = true; // a variable to check the if the shuttle is ready to launch 

 // adding alerts:
 // This condition will generate an alert if the condition kept empty.
 if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
    readyToLaunch = false; // In this condition ready to launch will be false
    alert('All fields are required!');
} 
    
//This condition will generate an alert if the value are in different data type.
if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
    readyToLaunch = false; // In this condition ready to launch will be false
    alert("Please enter valid information for each field!");
 } else {  // Updating shuttle requirements:
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
 // The condition for the fuel and cargo input and the final manipulation of the of the HTML as per the provided data.
    if (fuelLevel >= 10000) { // First: condition for Fuel level
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } else {
        list.style.visibility = 'visible'; // faulty id visible
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red"; // color changed to red
        readyToLaunch = false; // In this condition ready to launch will be false
    }

    if (cargoLevel <= 10000) { // Second: Condition for Cargo level
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    } else {
        list.style.visibility = 'visible'; // faulty id visible
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red"; // color changed to red
        readyToLaunch = false; //In this condition ready to launch will be false
      }

    }

    if (readyToLaunch) { // This mean rdyToLaunch = true;
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green"; //color changes to green
    }


};

 // Fetching the planetary data from the link provided :
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json() 
       });

    return planetsReturned;
}
 
function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length); // Return one planet from the list with a randomly-selected index.
    return planets[index];
}
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;