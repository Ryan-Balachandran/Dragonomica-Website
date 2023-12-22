"use strict"

let create = document.getElementById("create");   // button to create a valid dragon
let createError = document.getElementById('createError');
let dragons = [];

create.addEventListener("click", validateSpecies);
create.addEventListener("click", validateAge);
create.addEventListener("click", validateWings);
create.addEventListener("click", validateLegs);
create.addEventListener("click", validateWingsPair);
create.addEventListener("click", validateEggs);
create.addEventListener("click", validateHeight);

function makeDragon() {
     // debugger;
     let characteristics = document.getElementById("characteristics");     // table of dragon characteristics
     let dragonForm = document.forms.dragonMaker;                          // Form to make a dragon
     
     // Create row element
     let row = document.createElement("tr");
     
     // Create cells
     let species = document.createElement("td");
     let age = document.createElement("td");
     let wings = document.createElement("td");
     let legs = document.createElement("td");
     let wingPair = document.createElement("td");
     let eggs = document.createElement("td");
     let scale = document.createElement("td");
     let height = document.createElement("td");
     
     species.innerText = dragonForm["species"].value;
     age.innerText = dragonForm["age"].value + " years";
     wings.innerText = dragonForm["wings"].value;
     legs.innerText = dragonForm["legs"].value;
     wingPair.innerText = dragonForm["wingPair"].value;
     eggs.innerText = dragonForm["eggs"].value;
     scale.innerText = dragonForm["scale"].value;
     height.innerText = dragonForm["height"].value;
     
     row.appendChild(species);
     row.appendChild(age);
     row.appendChild(wings);
     row.appendChild(legs);
     row.appendChild(wingPair);
     row.appendChild(eggs);
     row.appendChild(scale);
     row.appendChild(height);
     
     characteristics.appendChild(row);
}

function validateForm() {
     if (!validateSpecies || !validateAge || !validateWings || !validateLegs ||
          !validateWingsPair || !validateEggs) {
          createError.style.display = 'block';
          createError.innerHTML = 'Please fix any error(s) to submit';
          setTimeout(function(){createError.style.display = 'none';}, 3000);
          return false;
     } else {
          makeDragon();
     }
}

function validateSpecies() {
     let species = document.getElementById("species");
     if (species.validity.valueMissing) {
          species.setCustomValidity("You forgot to enter a species");
     } else if (species.validity.patternMismatch) {
          species.setCustomValidity("Please use only letters");
     } else {
          species.setCustomValidity("");
     }
}

function validateAge() {
     let age = document.getElementById("age");
     if (age.validity.valueMissing) {
          age.setCustomValidity("You forgot to enter an age for your dragon");
     } else if (age.validity.patternMismatch) {
          age.setCustomValidity("Please use only numbers");
     } else {
          age.setCustomValidity("");
     }
}

function validateWings() {
     let wings = document.getElementById("wings");

     if (wings.validity.valueMissing) {
          wings.setCustomValidity("You forgot to check whether your dragon has wings");
     } else {
          wings.setCustomValidity("");
     }
}

function hasWings() {
     let wings = document.getElementById("wings");
     let wingPair = document.getElementById("wingPair");

     wingPair.disabled = wings.checked ? false : true;
     wingPair.required = wings.checked ? true : false;

     if(wingPair.disabled === true) {
          wingPair.value = 0;
     }
}

function validateLegs() {
     let legs = document.getElementById("legs");
     if (legs.validity.valueMissing) {
          legs.setCustomValidity("You forgot to enter the number of legs your dragon has");
     } else if (legs.validity.patternMismatch) {
          legs.setCustomValidity("Can't be a letter and has to be an even number!");
     } else {
          legs.setCustomValidity("");
     }
}

function validateWingsPair() {
     let wingPair = document.getElementById("wingPair");
     if (wingPair.validity.valueMissing) {
          wingPair.setCustomValidity("You forgot to enter how many pairs of wings your dragon has");
     } else if (wingPair.validity.patternMismatch) {
          wingPair.setCustomValidity("Please use only numbers");
     } else {
          wingPair.setCustomValidity("");
     }
}

// Add statement for 0 eggs
// Edit pattern to include range of eggs (3-6)
function validateEggs() {
     let eggs = document.getElementById("eggs");
     if (eggs.validity.valueMissing) {
          eggs.setCustomValidity("You forgot to enter how many eggs your dragon has in a clutch");
     } else if (eggs.validity.patternMismatch) {
          eggs.setCustomValidity("Please use only numbers");
     } else {
          eggs.setCustomValidity("");
     }
}

function validateHeight() {
     let height = document.getElementById("height");
     if (height.validity.valueMissing) {
          height.setCustomValidity("You forgot to enter the height of your dragon");
     } 
     else if (height.validity.patternMismatch) {
          height.setCustomValidity("Please use the format 3' or 3' 5''");
     } 
     else {
          height.setCustomValidity("");
     }
}
