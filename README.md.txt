1. Setup for unit test exercise

1.1 Working environment
* VS code install
* nodejs install


1.2 This .zip contains a few very simple JS examples.
Before being able to use it the dependencies have to be installed via:

npm init --yes
npm install jasmine --save

1.3 Packages that are needed later:
npm install request --save  
npm install express --save

Change package.json to -> 
  "scripts": {
    "test": "npx jasmine"
  },


npm install

1.4 Use jasmine library from https://jasmine.github.io/setup/nodejs.html is used in these practices.
Code snippets have been fetched from https://www.tutorialkart.com/nodejs/node-js-examples/#Node-Example-Create-a-Module


2. JS Testing simple exercises to be completed

2.1 pre-part00:
See if nodejs is installed correctly;
open a command terminal and call:

node lib/verifyNode.js

-> it should return 
"Hi there! This is Node.js!"


How to run the tests:
you can call "npm test" or "npm test spec/part01/*" to execute the tests.

2.2 part01 (done)
Create a jasmine unit test in spec/part01/CalculatorSpec.js for the JS file lib/calculator.js
 it should test the functions add, subtract and multiply
 e.g. 
   add(10,20)      == 30
   subtract(30,10) == 20
   multiply(1,10)  == 10

 subpart01.01 (done)

Switch the tested class to calculator2.js and see what happens. Describe how to fix this behaviour.

2.3 part02 (done)

Test the JS file lib/writeFile and check if a file was created. Extend the solution to be able to run the test multiple times.

2.4 part03 (done)

Test the JS file app/hello_world.js 
The existing spec/serverSpec.js will already include the hello_world.js and startup the server in the process of the test.

2.5 part04 (done)
Create a remote HTTP test for [1] to check for a string containing a word �Bibliothek�
[1] https://www.fh-joanneum.at/
 