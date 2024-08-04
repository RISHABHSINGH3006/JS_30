// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules-------------------------------------------------

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// const add = require('./day_13add');

// console.log(add(6,5));
// or
// const result = add(6,5);
// console.log(result);


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// const person = require('./day_13add');
// console.log(person.name);
// person.celebrateBirthday();
// person.greet();





// Activity 2: Named and Default Exports------------------------------------------------------

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// const { add, subtract, multiply, divide } = require('./day_13add');

// const num1 = 10;
// const num2 = 5;

// console.log(`The result of adding ${num1} and ${num2} is ${add(num1, num2)}.`);
// console.log(`The result of subtracting ${num2} from ${num1} is ${subtract(num1, num2)}.`);
// console.log(`The result of multiplying ${num1} and ${num2} is ${multiply(num1, num2)}.`);
// console.log(`The result of dividing ${num1} by ${num2} is ${divide(num1, num2)}.`);




// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

// import greet from './day_13add.js';
// const name = 'Rishabh';
// console.log(greet(name));

// If you want to use ES module syntax (import/export), you need to ensure that Node.js treats your files as ES modules. There are two ways to achieve this:
// Rename your files with the .mjs extension.
// Add "type": "module" to your package.json file.





// Activity 3: Importing Entire Modules-------------------------------------------------------

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const utils = require('./day_13add.js');

console.log(`PI: ${utils.PI}`);
console.log(`E: ${utils.E}`);
const num1 = 10;
const num2 = 5;
console.log(`The result of adding ${num1} and ${num2} is ${utils.add(num1, num2)}.`);
console.log(`The result of subtracting ${num2} from ${num1} is ${utils.subtract(num1, num2)}.`);
console.log(`The result of multiplying ${num1} and ${num2} is ${utils.multiply(num1, num2)}.`);
console.log(`The result of dividing ${num1} by ${num2} is ${utils.divide(num1, num2)}.`);





// Activity 4: Using Third-Party Modules------------------------------------------------------

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// // npm install lodash
// const _ = require('lodash');
// const myString = 'hello world';
// const capitalizedString = _.capitalize(myString);
// console.log(capitalizedString); // Output: Hello world



// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// // npm install axios
// const axios = require('axios');
// // Example usage of axios: Make a GET request to a public API
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// axios.get(url)
//     .then(response => {
//         console.log('Data:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });




// Activity 5: Module Bundling (Optional)-----------------------------------------------------

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
