'use strict';
var $ = require('jquery'),
    setErrorStatesJQuery = require('./setErrorStatesJQuery'),
    updateUser = require('../shared/updateUser'),
    $userForm = $('#mainForm');

init();

function init() {
    setupEventHandlers();
}

function setupEventHandlers() {
    $( 'button' ).click(function() {
        $( 'div' ).remove( '.ping' );
        $( 'div' ).remove( '.pong' );
        $( 'div' ).remove( '.success' );
    });

    $userForm.find('.submit-button').on('click', formSubmitted);
}

function formSubmitted() {

    var userModel = {
            firstName         : $userForm.find('#firstName > input:first').val(),
            lastName          : $userForm.find('#lastName > input:first').val(),
            email             : $userForm.find('#email > input:first').val(),
            subscriptionLevel : $userForm.find('#subscriptionLevel > input:first').val(),
            phoneNumber       : $userForm.find('#phoneNumber > input:first').val(),
            streetAddress     : $userForm.find('#streetAddress > input:first').val(),
            streetAddress_2   : $userForm.find('#streetAddress_2 > input:first').val(),
            city              : $userForm.find('#city > input:first').val(),
            state             : $userForm.find('#state > input:first').val(),
            zip               : $userForm.find('#zip > input:first').val()
        };

    updateUser(userModel)
        .then(function() {
            // $userForm.find('#firstName').after('<i class="fa fa-check success"></i>');
            // $userForm.find('#firstName').addClass('has-error');

            console.log('-------- IT WORKED !!!!');
        })
        .fail(function(validatedUserObj) {
            setErrorStatesJQuery(validatedUserObj.errors);
        });

    return false;
}
