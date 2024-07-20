// Day 8: ES6+ Features
// Tasks/Activities:

// Activity 1: Template Literals---------------------------------------------------------------

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Rishabh Singh";
let age = 23;
console.log(`hii..! my name is ${name} and I am ${age} years old`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`This is a multi-line string.
Rishabh
Singh
Solanki`);




// Activity 2: Destructuring------------------------------------------------------------------

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const array = [1,2,3,4,5];
const[first, second, t, f, fi, s, se] = array;
console.log(`array destructuring ${first} , ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "story of my life",
    author: "hellen killer"
}
const {title, author} = book;
console.log(`object destructuring ${title}, ${author}`)




// Activity 3: Spread and Rest Operators------------------------------------------------------

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const newArray = [...array,6,7,8];
console.log(`spread operator ${newArray}`);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
const sum = (...num) => {
    return num.reduce((accumulato, current) => accumulato + current , 0);
};
const result = sum(1,2,3,4,5,6);
console.log(`rest operator ${result}`);




// Activity 4: Default Parameters-------------------------------------------------------------

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const multiply = (a, b = 3) => {
    return a*b;
};
console.log(multiply(6,9));
console.log(multiply(6));




// Activity 5: Enhanced Object Literals-------------------------------------------------------

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const tit = "1984";
const thor = "George Orwell";
const ear = 1949;

const bookj = {
    tit,
    thor,
    ear,
    };
    
    console.log(bookj);




// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propertyName1 = "firstName";
const propertyName2 = "lastName";
const propertyName3 = "age";

const firstNameValue = "Rishabh"
const lastNameValue = "Singh"
const ageValue = "23"

const person = {
    [propertyName1]: firstNameValue,
    [propertyName2]: lastNameValue,
    [propertyName3]: ageValue
}

console.log(person);