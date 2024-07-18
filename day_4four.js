// Day 4: Loops
// Tasks/Activities:

// Activity 1: For Loop-----------------------------------------------------------------------
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// * Task 2: Write a program to print the multiplication table of 5 using a for loop.

let a = 5;
 for(let i = 1; i < 11; i++){
     console.log(a,"x",i,"=",a*i);
 }




// Activity 2: While Loop---------------------------------------------------------------------
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;
while (i<11) {
    sum+=i;  
    i++;  
}
console.log(sum);

//  Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let i = 10;
while (i>0) {
    console.log(i);
    i--;
}




// Activity 3: Do... While Loop---------------------------------------------------------------
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let i = 5;
do {
    console.log(i);
    i--;
} while (i);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let fuck =  1;
let i = 4;
do {
    fuck *=i;
    i--;
} while (i);
console.log(fuck);




// Activity 4: Nested Loops-------------------------------------------------------------------
// * Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****

for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*"); //In JS, console.log prints to a new line by default.
    }
    console.log("");
    
}




//  Activity 5: Loop Control Statements-------------------------------------------------------
// * Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i < 11; i++) {
    if(i==5){
        continue;
    }

    console.log(i);    
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i < 11; i++) {
    if(i==7){
        break;
    }
    console.log(i);    
}

