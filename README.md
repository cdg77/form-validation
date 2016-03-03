# Form Validation Examples

* Each example is in a subdirectory (e.g. javascript, jquery, bacbkone)
* validate first, last, phone, subscription level, email, address

* mvp
    * [x] plain html
    * [x] plain css
    * [x] however it currently looks
    * [x] script tags
    * [x] validation is that the fields exist - have a value
        * [x] dropdown has hard coded values initially empty
    * [x] all with plain javascript
    * [x] on submit an alert comes up if not valid and form is submitted via html if valid

* cleanup
    * [x] jade
    * [x] sass
    * [ ] make form look nice    
    * [x] browserify
    * [x] unit tests running
    * [x] validation rules that are stored somewhere (e.g. what is a valid email, address, phone, etc? )
    * [x] error displays if invalid next to input
    * [ ] green check marks if valid next to input

* build out
    * [ ] use jade mixins to create form
    * examples
        * [x] jquery
        * [ ] backbone
        * [ ] angular
        * [ ] knockout
        * [ ] riot
        * [ ] react
        * [ ] rivets      
        
* Notes:
    * Should get the tests working again
    * From dir structure, shared means shared between server and client
        * shared client should be somewhere else
        * shared should not include example libraries
        * might be good idea to create separate package.json for each example?
    * can require json (example constants.json)
        * should redo resources to be json
    * creating extra promises is an anti pattern
        * if a method you are using creates a promise, return that
        * https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns
        * remove creation of new deferred from updateUser
    * currently writing is hard to read
        * should make errors a unique color - pop more
    * setErrorStatesJQuery has a lot of repeated code
    