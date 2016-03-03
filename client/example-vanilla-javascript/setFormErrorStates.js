'use strict';
module.exports = function setFormErrorStates(errorsObj) {

    var $form = document.querySelector('#mainForm');
    var div = $form.querySelector('element');

    if (errorsObj.firstName) {
        div = $form.querySelector('#firstNameEmptyError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.firstName;
    } else {
        div = $form.querySelector('#firstNameEmptyError');
        div.innerHTML = '';
    }

    if (errorsObj.lastName) {
        div = $form.querySelector('#lastNameEmptyError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.lastName;
    } else {
        div = $form.querySelector('#lastNameEmptyError');
        div.innerHTML = '';
    }

    if (errorsObj.email) {
        div = $form.querySelector('#emailEmptyError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.email;
    } else {
        div = $form.querySelector('#emailEmptyError');
        div.innerHTML = '';
    }

    if (errorsObj.subscriptionLevel) {
        div = $form.querySelector('#subscriptionLevelError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.subscriptionLevel;
    } else {
        div = $form.querySelector('#subscriptionLevelError');
        div.innerHTML = '';
    }

    if (errorsObj.phoneNumber) {
        div = $form.querySelector('#phoneNumberError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.phoneNumber;
    } else {
        div = $form.querySelector('#phoneNumberError');
        div.innerHTML = '';
    }

    if (errorsObj.streetAddress) {
        div = $form.querySelector('#streetAddressError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.streetAddress;
    } else {
        div = $form.querySelector('#streetAddressError');
        div.innerHTML = '';
    }

    if (errorsObj.city) {
        div = $form.querySelector('#cityError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.city;
    } else {
        div = $form.querySelector('#cityError');
        div.innerHTML = '';
    }

    if (errorsObj.state) {
        div = $form.querySelector('#stateError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.state;
    } else {
        div = $form.querySelector('#stateError');
        div.innerHTML = '';
    }

    if (errorsObj.zip) {
        div = $form.querySelector('#zipError');
        div.innerHTML = div.innerHTML + 'Error : ' + errorsObj.zip;
    } else {
        div = $form.querySelector('#zipError');
        div.innerHTML = '';
    }
};
