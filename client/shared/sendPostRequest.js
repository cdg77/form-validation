'use strict';

var $ = require('jquery');

module.exports = function sendPostRequest(url, payload) {
    return $.ajax({
        type: 'POST',
        url : url,
        dataType : 'json',
        contentType : 'application/json',
        data : JSON.stringify(payload)
    });
};