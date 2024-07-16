//  Day 3: Control Structures
// Tasks/Activities:



// Activity 1: If-Else Statements-------------------------------------------------------------
// * Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const a = 2;
if(a>0){
    console.log("a = ", a ,"is positive");
}
else if(a==0){
    console.log("a = ", a ,"is zero");
}
else{
    console.log("a = ", a ,"is negative");
}

// * Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

const age = -2;
if(age>=18){
    console.log("you can vote");
}
else if(age>0 && age<18){
    console.log("you can not vote");
}
else{
    console.log("invalid age");
}




// Activity 2: Nested If-Else Statements------------------------------------------------------
// Task 3: Write a program to find the largest of three numbers using nested if else statements.

const b = 3; 
const c = 6; 
const d = 9; 
if (b>c && b>d) {
    console.log(b,"is largest");    
}
if (c>b && c>d) {
    console.log(c,"is largest");    
}
else {
    console.log(d,"is largest");    
}




// Activity 3: Switch Case--------------------------------------------------------------------
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

switch (a) {
    case 1:
        console.log("Monday")        
        break;
    case 2:
        console.log("Tuesday")        
        break;
    case 3:
        console.log("Wednesday")        
        break;
    case 4:
        console.log("Thursday")        
        break;
    case 5:
        console.log("Friday")        
        break;
    case 6:
        console.log("Saturday")        
        break;
    case 7:
        console.log("Sunday")        
        break;
}

// - Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const score = 9;
switch (score) {
  case  10: 
    console.log("A");
    break;

  case 9:
    console.log("B");
    break;

  case 8:
    console.log("C");
    break;

  case 7:
    console.log("D");
    break;

  default:
    console.log("F");
}





// Activity 4: Conditional (Ternary) Operator-------------------------------------------------
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

    if (a%2 == 0) {
        console.log(a,"is even");    
    }
    else {
        console.log(a,"is odd");    
    }




// Activity 5: Combining Conditions-----------------------------------------------------------
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

let year = 2000
if (year%4 == 0) {
    console.log(year,"is leap year");    
}
else {
    console.log(year,"is non-leap year");    
}
