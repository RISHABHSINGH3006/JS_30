//  Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access------------------------------------------------------
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let a = [1,2,3,4,5];
console.log(a);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("a[0]",a[0]);
console.log("a[4]",a[4]);




// Activity 2: Array Methods (Basic)----------------------------------------------------------
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
a.push(6);
console.log("push()",a);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
a.pop();
console.log("pop()",a);

// Task 5: Use the shift method to remove the first element from me array and log the updated array.
a.shift();
console.log("shift()",a);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
a.unshift(9);
console.log("unshift(9)",a);




// Activity 3: Array Methods (Intermediate)---------------------------------------------------
// Task 7: Use the map method to create a new array where each number is doubled and log the new array. 
const b = a.map(i=>i*2);
console.log("map",b); 

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const c = a.filter(i => i%2==0);
console.log("filter()",c);

// * Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const d = a.reduce((i,j)=> i+j, 0);
console.log("reduce()",d); //(i, j) => i + j: An arrow function that takes the i (the running total) and the j (the current number in the array) and returns their sum. "0" is initial value for the i.




// Activity 4: Array Iteration----------------------------------------------------------------
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);  //In JS, console.log prints to a new line by default.  
    // process.stdout.write(a[i]); // but it expects "string argument"
    process.stdout.write(a[i].toString());
}
console.log(""); //for adding a new line. 

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
a.forEach(i => {
    console.log(i);    
});




// Activity 5: Multi-dimensional Arrays-------------------------------------------------------
// * Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
 let e = [[1,2,3],[4,5,6]];
 console.log(e);

// * Task 13: Access and log a specific element from the two-dimensional array.
console.log(e[0][2]);

