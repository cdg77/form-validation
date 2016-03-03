'use strict';

module.exports = validateUser;

    // --------- Function that validates form and creates object of messages ---------

function validateUser(userModel) {
    var response = { valid : true , errors : {} };

    response = validateFirstName(userModel.firstName, response);
    response = validateLastName(userModel.lastName, response);
    response = validateEmail(userModel.email, response);
    response = validateSubscriptionLevel(userModel.subscriptionLevel, response);
    response = validatePhoneNumber(userModel.phoneNumber, response);
    response = validateStreetAddress(userModel.streetAddress, response);
    response = validateCity(userModel.city, response);
    response = validateState(userModel.state, response);
    response = validateZip(userModel.zip, response);
    return response;

}
    // --------- Functions to validate form fields ---------
var reAlphaNum = /^[a-z-\d_\s]+$/i; /* Regex for alphanumeric characters or empty - case insensitive */
var reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;


function validateFirstName(firstName, response) {
  if (!reAlphaNum.test(firstName)) {
    response.valid = false;
    response.errors.firstName = 'Please include your first name.';
  }
  return response;
}

function validateLastName(lastName, response) {
  if (!reAlphaNum.test(lastName)) {
    response.valid = false;
    response.errors.lastName = 'Please include your last name.';
  }
  return response;
}

function validateEmail(email, response) {
  if (!reEmail.test(email)) {
    response.valid = false;
    response.errors.email = 'Please include a valid email.';
  }
  return response;
}

function validateSubscriptionLevel(subscriptionLevel, response) {
  if ('' === subscriptionLevel) {
    response.valid = false;
    response.errors.subscriptionLevel = 'Please select your subscription level!';
  }
  return response;
}

function validateStreetAddress(streetAddress, response) {
    if ('' === streetAddress) {
        response.valid = false;
        response.errors.streetAddress = 'Please enter a valid address!';
    }
    return response;
}

function validatePhoneNumber(phoneNumber, response) {
  if ('' === phoneNumber) {
    response.valid = false;
    response.errors.phoneNumber = 'please enter a valid phone number.';
  }
  return response;
}

function validateCity(city, response) {
    if ('' === city) {
        response.valid = false;
        response.errors.city = 'please enter a valid city.';
    }
    return response;
}

function validateState(state, response) {
    if ('' === state) {
        response.valid = false;
        response.errors.state = 'please enter a valid state.';
    }
    return response;
}

function validateZip(zip, response) {
    if ('' === zip) {
        response.valid = false;
        response.errors.zip = 'please enter a valid 5 digit zip code!';
    }
    return response;
}
