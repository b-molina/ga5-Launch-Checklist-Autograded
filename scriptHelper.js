// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  const div = document.getElementById("missionTarget");
  div.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                 <li>Name: ${name} </li>
                 <li>Diameter: ${diameter} </li>
                 <li>Star: ${star} </li>
                 <li>Distance from Earth: ${distance} </li>
                 <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src= ${imageUrl}>`;
}

function validateInput(testInput) {
  const numberInput = Number(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numberInput)) {
    return "Not a Number";
  } else if (isNaN(numberInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Names cannont include numbers!");
  } else if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Numbered input required for Fuel and Cargo!");

  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;

    //if fuel level is to low
    if (fuelLevel < 10000) {
      fuelStatus.innerHTML = `Fuel level too low for launch`;
      launchStatus.style.color = "red";
      launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
      list.style.visibility = "visible";
    }
    //cargo mass is too heavy
    if (cargoLevel > 10000) {
      cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
      launchStatus.style.color = "red";
      launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
      list.style.visibility = "visible";

      //   //if cargo level is too heavy & fuel is low
      // } else if (fuelLevel < 10000 && cargoLevel > 10000) {
      //   cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
      //   fuelStatus.innerHTML = `Fuel level too low for launch`;
      //   launchStatus.style.color = "red";
      //   launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    }

    //good to go
    if (fuelLevel > 1000 && cargoLevel < 10000) {
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let planetIndex = Math.floor(Math.random() * planets.length);
  return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
