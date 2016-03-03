solid-form
    form#mainForm.pure-form.pure-form-stacked

        fieldset
            legend 
                strong Solid 
                | | Form Validation Project
                | | Vanilla JQuery


            label(for='firstName') First Name
            input#firstName.pure-input(type='text', required, name='firstName', value='', placeholder='first name')

            label(for='lastName') Last Name
            input#lastName.pure-input(type='text', required, name='lastName', value='', placeholder='last name')

            label(for='email') Email
            input#email(type='email', required, name='email', value='', placeholder='email@email.com')

            label(for='subscriptionLevel') Subscription Level
            select#subscriptionLevel(required)
                option(value='') choose level
                option(value='silver') silver
                option(value='gold') gold
                option(value='platinum') platinum

            label(for='PhoneNumber') Phone number
            input#phoneNumber(type='tel', required, name='phoneNumber', value='', placeholder='(555)555-5555')
            //- |     (
            //- input(type='tel', required, size='3', maxLength='3')
            //- | ) 
            //- input(type='tel', required, size='3', maxLength='3')
            //- |  - 
            //- input(type='tel', required, size='4', maxLength='4')

            legend Street Address
            label(for='streetAddress') Address
            input#streetAddress(type='text', required, name='streetAddress', value='', placeholder='101 Easy St.')

            label(for='streetAddress_2')
            input#streetAddress_2(type="text", name="streetAddress_2", value="", placeholder="Unit: 505")

            label(for="city") City
            input#city(type="text", required, name="city", value="", placeholder="Portland")

            label(for="state") State
            input#state(type="text", required, name="state", value="", placeholder="OR")

            label(for="zip") Zip
            input#zip(type="text", required, name="zip", value="", placeholder="97201")

        button.pure-button.pure-button-primary.submit-button(type="submit") Submit      
              
