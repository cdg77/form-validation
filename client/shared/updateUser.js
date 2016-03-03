'use strict';

var $ = require('jquery'),
    validateUser = require('../../shared/validate'),
    sendPostRequest = require('./sendPostRequest'),
    constants = require('../../shared/constants');

module.exports = function updateUser(userModel) {
    var $deferred = new $.Deferred(),
        validatedUserObj = validateUser(userModel);

    if(validatedUserObj.valid) {
        sendPostRequest(constants.updateUserEndpoint, userModel)
            .then($deferred.resolve);
    } else {
        $deferred.reject(validatedUserObj);
    }

    return $deferred.promise();
};
