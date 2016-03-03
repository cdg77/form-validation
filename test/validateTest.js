'use strict';

var chai = require('chai'),
    validate = require('../shared/validate');

chai.should();

describe.skip('validate', function() {
  // invalid if there is non alpha numeric character in the name

  it('should indicate response is invalid if there is no first name', function() {
    validate({
      firstName : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        firstName : 'Please include your first name.'
      }
    });
  });

  it('should indicate response is invalid if any non alphanumeric characters are entered', function() {
    validate({
      firstName : 'Bob@###**'
    })
    .should.deep.equal({
      valid : false,
      errors : {
        firstName : 'Please include your first name.'
      }
    });
  });

  it('should indicate response is valid if there is a first name', function() {
    validate({
      firstName : 'Bob'
    })
    .should.deep.equal({
      valid : true,
      errors : {}
    });
  });

  it('should indicate response is invalid if there is no last name', function() {
    validate({
      lastName : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        lastName : 'Please include your last name.'
      }
    });
  });

  it('should indicate response is invalid if any non alphanumeric characters are entered', function() {
    validate({
      lastName : { value : 'Bob *@^' }
    }, { lastName : true })
    .should.deep.equal({
      valid : false,
      errors : {
        lastName : 'Please include your last name.'
      }
    });
  });

  it('should indicate response is invalid if email returns an empty string', function() {
    validate({
      email : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        email : 'Please include a valid email.'
      }
    });
  });

  it('should indicate response is invalid if there is no subscriptionLevel chosen', function() {
    validate({
      subscriptionLevel : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        subscriptionLevel : 'Please select your subscription level!'
      }
    });
  });

  it('should indicate response is invalid if a phone number was not entered', function() {
    validate({
      phoneNumber : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        phoneNumber : 'please enter a valid phone number.'
      }
    });
  });

  it('should indicate response is invalid if no city was entered', function() {
    validate({
      city : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        city : 'please enter a valid city.'
      }
    });
  });

  it('should indicate response is invalid if no state was entered', function() {
    validate({
      state : ''
    })
    .should.deep.equal({
      valid : false,
      errors : {
        state : 'please enter a valid state.'
      }
    });
  });
});
