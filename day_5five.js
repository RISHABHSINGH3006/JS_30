// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration-----------------------------------------------------------
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOdd(a) {
    if (a%2==0) {
        console.log("even");        
    }
    else{
        console.log("odd");
    }
    
}
evenOdd(7);

// Task 2: Write a function to calculate the square of a number and return the result.
function square(b){
    console.log(b*b);
}
square(9);




// Activity 2: Function Expression------------------------------------------------------------
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function maxi(c, d){
    if(c>d){
        console.log(c);
    }
    else{
        console.log(d);
    }
}
maxi(9,6)

// Task 4: Write a function expression to concatenate two strings and return the result.
function concat(e, f){
    console.log(e + f);
}
concat("rishabh ", "singh");




// Activity 3: Arrow Functions----------------------------------------------------------------
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (g, h) => console.log(g+h);
sum(6,9);


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const boolCheck = (i, j) => i.includes(j);
console.log(boolCheck("Rishabh", "b"));




// Activity 4: Function Parameters and Default Values-----------------------------------------
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const prod = (k,l=6) => console.log(k*l);
prod(9);

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name,age=96) => console.log("congratulations......! mr.",name,"you are now", age, "years old" );
greet("Rishabh", 23);
greet("Vedansh");




// Activity 5: Higher-Order Functions---------------------------------------------------------
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(fn, num){
    for (let i = 0; i < num; i++) {
        fn();        
    }
}
function fn(){
    console.log("hiiiii...!")
}

repeatFunction(fn, 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function repeat(fun1, fun2, num){
    fun2(fun1(num));
}

function fun1(a, b=9){
    console.log(a+b);
    return(a+b);
}

function fun2(a, b=9){
    console.log(a*b);
}

repeat(fun1, fun2, 6);




