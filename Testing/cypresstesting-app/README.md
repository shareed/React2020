This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Run the app in the development mode.<br />
* `yarn start` or  `npm start`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
___
# React Testing 
**All testing, of all kinds uses the framework “arrange, act, assert” where a test is written to do the following.**

* Arrange - Set up a webpage, form input, etc.
* Act - Simulate a user action, like a button click or form input.
* Assert - Verify that the simulated user action resulted in the expected output.




# [Cypress](https://www.youtube.com/watch?time_continue=450&v=VvLocgtCQnY&feature=emb_logo)

* Cypress is an awesome testing tool for unit, integration, and E2E tests.
* In traditional end to end testing, developers have to use and chose from a variety of frameworks, assertion libraries, wrappers, and more. Cypress was designed as an “all-in-one” testing framework where tests can be written in a single language (JavaScript) and run graphically in a browser.
* [Cypress](https://www.cypress.io/)
* [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
* [Github](https://github.com/cypress-io/)
* [Gitter](https://gitter.im/cypress-io/cypress)
* [Chai](https://github.com/chaijs/chai) the assertion library that   cypress uses
* [Cypress Lecture](https://www.youtube.com/watch?v=g5b8LgcmvtI&feature=youtu.be)

* There is a direct download without using npm
* start with a folder with a package.json file `npm init -y`
* install cypress `npm install cypress --save-dev`
* Run cypress using `node_modules/.bin/cypress open` , or `npx cypress open`
* crea a test file in cypres/intergration with the `_spec.js` or `_test.js` exstention, it will show up in the intergration test list
* click on the new file in the list to launch it in the cypress test runner




# Writing Test
[Best Practices](./img/testingbestpractices.jpg)
### Arrange
* *Describe Block* (comes from Mocha)
    * higher order function, and will accept a string that gives the test a name and a test as a callback function (It Block)
    * helps us keep organized by grouping related test together

            describe('Name Test', function () {

            
            })

### Act
* *It block* 
    * what our test does
    * higher order function, and will accept a string that explain what the test does and a assertion
    * actions and assertions go here

            describe('Name Test', function () {
            it('Explain what it does', function() {
                })
            })


### Assert
* expect: comes from try assertion library
* to:
* equal: 

            //arrange
            describe('My First Test', function () {
            //act
                it('Does not do much', function() {
            //assert
                    expect(true).to.equal(true);
                })
            })




## cypress.json

        {
            "baseUrl": "http://localhost:3000", 

        }
* this will allow us to reference the url with a slash i  our test