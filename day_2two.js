// Day 2: Operators
// Tasks/Activities:

// Activity 1: Arithmetic Operations-----------------------------------------------------------
// Task 1: Write a program to add two numbers and log the result to the console.
let a = 9;
let b = 6;
console.log("add = ",a+b);

// Task 2: Write a program to subtract two numbers and log the result to the console.
console.log("substract = ",a-b);

// Task 3: Write a program to multiply two numbers and log the result to the console.
console.log("multiply = ",a*b);

// Task 4: Write a program to divide two numbers and log the result to the console.
console.log("divide = ",a/b);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log("reminder or modulo = ",a%b);




// Activity 2: Assignment Operators------------------------------------------------------------
// Task 6: Use the operator to add a number to a variable and log the result to the console.
console.log(a+6);

// Task 7: Use the operator to subtract a number from a variable and log the result to the console.
console.log(a-6);




// Activity 3: Comparison Operators------------------------------------------------------------
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log(a>b);
console.log(a<b);

// * Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(6>=6);
console.log(6<=3);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(9=="9");
console.log(9==="9");




// Activity 4: Logical Operators--------------------------------------------------------------
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log(a<b && a%b==3);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(a<b || a%b==3);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log(!a<b);




// Activity 5: Ternary Operator---------------------------------------------------------------
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let age = 25;
let drink = (age >= 21) ? "beer" : "soda";
console.log(drink);
