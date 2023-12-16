// JavaScript Document

"use strict"

let subButton = document.getElementById("submit"); 
let createError = document.getElementById('createError');

subButton.addEventListener("click", validateFName);
subButton.addEventListener("click", validateLName);
subButton.addEventListener("click", validateAge);
subButton.addEventListener("click", validatePhone);
subButton.addEventListener("click", validateEmail);

// subButton.addEventListener("click", validateStreet);
// subButton.addEventListener("click", validateTown);
subButton.addEventListener("click", validateState);
subButton.addEventListener("click", validateZip);


function validateForm() {
     if (!validateFName || !validateLName || !validateAge || !validatePhone ||
         !validateEmail || !validateStreet || !validateTown || !validateState || !validateZip) {
          createError.style.display = 'block';
          createError.innerHTML = 'Please fix any error(s) to submit';
          setTimeout(function(){createError.style.display = 'none';}, 3000);
          return false;
     } 
}

function validateFName() {
     let fname = document.getElementById("fname");
     if (fname.validity.valueMissing) {
          fname.setCustomValidity("You forgot to enter your first name");
     } else if (fname.validity.patternMismatch) {
          fname.setCustomValidity("Please use only letters");
     } else {
          fname.setCustomValidity("");
     }
}

function validateLName() {
     let lname = document.getElementById("lname");
     if (lname.validity.valueMissing) {
          lname.setCustomValidity("You forgot to enter your last name");
     } else if (lname.validity.patternMismatch) {
          lname.setCustomValidity("Please use only letters");
     } else {
          lname.setCustomValidity("");
     }
}

function validateAge() {
     let age = document.getElementById("age");
     if (age.validity.valueMissing) {
          age.setCustomValidity("You forgot to enter your age");
     } else {
          age.setCustomValidity("");
     }
}

function validatePhone() {
     let phone = document.getElementById("phone");
     if (phone.validity.valueMissing) {
          phone.setCustomValidity("You forgot to enter phone number");
     } else if (phone.validity.patternMismatch) {
          phone.setCustomValidity("Please use only letters");
     } else {
          phone.setCustomValidity("");
     }
}

function validateEmail() {
     let email = document.getElementById("email");
     if (email.validity.valueMissing) {
          email.setCustomValidity("You forgot to enter your email");
     } else if (email.validity.patternMismatch) {
          email.setCustomValidity("Please provide a valid email");
     } else {
          email.setCustomValidity("");
     }
}

function validateStreet() {
     
}

function validateTown() {
     
}

function validateState() {
     let state = document.getElementById("state");
     if (state.validity.valueMissing) {
          state.setCustomValidity("You forgot to enter your state");
     } else if (state.validity.patternMismatch) {
          state.setCustomValidity("Please provide a valid state code");
          // Doesn't care if it matches an actually valid state or not
     } else {
          state.setCustomValidity("");
     }
}

function validateZip() {
     let zip = document.getElementById("zip");
     if (zip.validity.valueMissing) {
          zip.setCustomValidity("You forgot to enter your zip code");
     } else if (zip.validity.patternMismatch) {
          zip.setCustomValidity("Please provide a valid zip code with only numbers");
     } else {
          zip.setCustomValidity("");
     }
}