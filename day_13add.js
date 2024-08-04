// task - 1-----------------------------------------------------------------------------------

// function add(a, b){
//     return a+b;
//  }
//  module.exports = add;

 
 //  task - 2---------------------------------------------------------------------------------
 
// const person = {
//     name: 'babu bhaiya',
//     age: 30,
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     },
//     celebrateBirthday() {
//         this.age += 1;
//         console.log(`It's my birthday! I am now ${this.age} years old.`);
//     }
// };
// module.exports = person;


//task - 3------------------------------------------------------------------------------------

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero.");
//     }
//     return a / b;
// }

// module.exports = { add, subtract, multiply, divide };


// task - 4-----------------------------------------------------------------------------------

// function greet(name) {
//     return `Hello, ${name}!`;
// }
// export default greet;


// task - 5-----------------------------------------------------------------------------------

const PI = 3.14159;
const E = 2.71828;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

module.exports = {
    PI,
    E,
    add,
    subtract,
    multiply,
    divide
};
