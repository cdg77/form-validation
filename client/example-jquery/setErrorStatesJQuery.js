'use strict';
var $ = require('jquery');
module.exports = setErrorStatesJQuery;


function setErrorStatesJQuery(errorsObj) {

    var successIcon = '<div class= "successIcon"><i class="fa fa-check" id="valid"></i></div>';
    var errorStringIconPong = '<div class = "pong">"OOPS <i class="fa fa-exclamation"></i> : </div>' + '<div class = "pong">';
    var errorStringIconPing = '<div class = "ping">"OOPS <i class="fa fa-exclamation"></i> :  </div>' + '<div class = "pong">';

    if (errorsObj.firstName) {
        $('#firstName').after(errorStringIconPong + errorsObj.firstName + ' "</div>');
    } else {
        $('#firstName').after(successIcon);
    }

    if (errorsObj.lastName) {
        $('#lastName').after(errorStringIconPing + errorsObj.lastName + ' " </div>');
    } else {
        $('#lastName').after(successIcon);
    }

    if (errorsObj.email) {
        $('#email').after(errorStringIconPong + errorsObj.email + ' " </div>');
    } else {
        $('#email').after(successIcon);
    }

    if (errorsObj.phoneNumber) {
        $('#phoneNumber').after(errorStringIconPong + errorsObj.phoneNumber + ' " </div>');
    } else {
        $('#phonNumber').after(successIcon);
    }

    if (errorsObj.subscriptionLevel) {
        $('#subscriptionLevel').after(errorStringIconPong + errorsObj.subscriptionLevel + ' " </div>');
    } else {
        $('#subscriptionLevel').after(successIcon);
    }

    if (errorsObj.streetAddress) {
        $('#streetAddress').after(errorStringIconPing + errorsObj.streetAddress + ' " </div>');
    } else {
        $('#streetAddress').after(successIcon);
    }

    if (errorsObj.city) {
        $('#city').after(errorStringIconPong + errorsObj.city + ' " </div>');
    } else {
        $('#city').after(successIcon);
    }

    if (errorsObj.state) {
        $('#state').after(errorStringIconPing + errorsObj.state + ' " </div>');
    } else {
        $('#state').after(successIcon);
    }

    if (errorsObj.zip) {
        $('#zip').after(errorStringIconPong + errorsObj.zip + ' " </div>');
    } else {
        $('#zip').after(successIcon);
    }

}

// function clearDivs() {
//
//     $( "div" ).remove( ".ping" );
//     $( "div" ).remove( ".pong" );
// }
// $( "button" ).click(function() {
//     $( "div" ).remove( ".ping" );
//     $( "div" ).remove( ".pong" );
// });

// $(document).ready(function() {
//   $("#mainForm").submit(function(event) {
//     event.preventDefault();
//
//
//   });
// });
