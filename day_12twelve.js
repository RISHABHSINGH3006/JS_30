// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch--------------------------------------------

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

try {
    console.log(mango);

} catch (err) {
    console.log(err.name);
    console.log(err.massage);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Cannot divide by zero');
    }
    return numerator / denominator;
}

function handleDivision(numerator, denominator) {
    try {
        const result = divideNumbers(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

handleDivision(10, 2); 
handleDivision(10, 0); 





// Activity 2: Finally Block------------------------------------------------------------------

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log(rishabh);
} catch (erro) {
    console.log(erro.name);
    console.log(erro.message);
}finally{
    console.log("finally");
}




// Activity 3: Custom Error Objects-----------------------------------------------------------

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class DivisionError extends Error {
    constructor(message) {
        super(message); 
        this.name = 'DivisionError';
    }
}

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new DivisionError('Cannot divide by zero');
    }
    return numerator / denominator;
}

function handleDivision(numerator, denominator) {
    try {
        const result = divideNumbers(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        if (error instanceof DivisionError) {
            console.error(`Division Error: ${error.message}`);
        } else {
            console.error(`Unexpected Error: ${error.message}`);
        }
    }
}

handleDivision(10, 2); 
handleDivision(10, 0); 



// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError("Input cannot be empty or non-string.");
    }
    return true;
}

try {
    const userInput = "";
    validateInput(userInput);
    console.log("Input is valid.");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation error: ${error.message}`);
    } else {
        console.error(`An unexpected error occurred: ${error.message}`);
    }
}





// Activity 4: Error Handling in Promises-----------------------------------------------------

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject(new Error("Promise rejected randomly."));
        }
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(`Caught an error: ${error.message}`);
    });


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject(new Error("Promise rejected randomly."));
        }
    });
}
async function handleRandomPromise() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
}

handleRandomPromise();




// Activity 5: Graceful Error Handling in Fetch----------------------------------------------

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console.


const invalidUrl = "https://invalid.url/endpoint";

fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
    })
    .catch(error => {
        console.error(`Fetch error: ${error.message}`);
    });



// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const nvalidUrl = "https://invalid.url/endpoint";

async function fetchData() {
    try {
        const response = await fetch(nvalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error(`Fetch error: ${error.message}`);
    }
}

fetchData();
