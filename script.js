window.addEventListener("load", function() {
    let listedPlanets;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
        // Call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        const selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance,  selectedPlanet.moons, selectedPlanet.image);
    });

    // Call formSubmission at the appropriate time
    const form = document.querySelector("form");
    const list = document.querySelector("#faultyItems");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const pilotName = document.querySelector("input[name='pilotName']").value;
        const copilotName = document.querySelector("input[name='copilotName']").value;
        const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        const cargoMass = document.querySelector("input[name='cargoMass']").value;

        // Call formSubmission with obtained values
        formSubmission(document,list, pilotName, copilotName, fuelLevel, cargoMass);
    });
});