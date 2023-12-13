// // Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);

    let listedPlanet = pickPlanet(listedPlanets);
    console.log(listedPlanet);

    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    addDestinationInfo(
      document,
      listedPlanet.name,
      listedPlanet.diameter,
      listedPlanet.star,
      listedPlanet.distance,
      listedPlanet.moons,
      listedPlanet.image
    );
  });

  let form = document.querySelector("form");
  let list = document.getElementById("faultyItems");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]").value;
    let copilotInput = document.querySelector("input[name=copilotName]").value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevelInput = document.querySelector("input[name=cargoMass]").value;

    //let list = document.getElementById("faultyItems");
    formSubmission(
      document,
      list,
      pilotInput,
      copilotInput,
      fuelLevelInput,
      cargoLevelInput
    );
  });
});
