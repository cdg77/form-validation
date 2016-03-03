'use strict';

var setFormErrorStates = require('./setFormErrorStates'),
    updateUser = require('../shared/updateUser'),
    mainFormElement = document.querySelector('#mainForm');

init();

function init() {
    setupEventHandlers();
}

function setupEventHandlers() {
    mainFormElement.querySelector('button[type="submit"]').addEventListener('click', formSubmitted);
}

function formSubmitted() {
    var userModel = {
            firstName         : mainFormElement.querySelector('#firstName').value,
            lastName          : mainFormElement.querySelector('#lastName').value,
            email             : mainFormElement.querySelector('#email').value,
            subscriptionLevel : mainFormElement.querySelector('#subscriptionLevel').value,
            phoneNumber       : mainFormElement.querySelector('#phoneNumber').value,
            streetAddress     : mainFormElement.querySelector('#streetAddress').value,
            streetAddress_2   : mainFormElement.querySelector('#streetAddress_2').value,
            city              : mainFormElement.querySelector('#city').value,
            state             : mainFormElement.querySelector('#state').value,
            zip               : mainFormElement.querySelector('#zip').value
        };

    updateUser(userModel)
        .then(function() {
            console.log('-------- IT WORKED !!!!');
        })
        .fail(function(validatedUserObj) {
            console.log('-------- BUMMER !!!!');
            console.log('not valid');
            console.log(validatedUserObj.errors);
            setFormErrorStates(validatedUserObj.errors); 
        });

    return false;
}
