// Day 1: Variables and Data Types
// Tasks/Activities:


// Activity 1: Variable Declaration--------------------------------------------------
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a = 369;
console.log(a);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let b = "Rishabh";
console.log(b);




// Activity 2: Constant Declaration---------------------------------------------------
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const c = true;
console.log(c);




// Activity 3: Data Types----------------------------------------------------------------
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

var d = { name: "chai wala", age: 33 };
console.log('arr:', d);
var e = [1, 2, 3, 4, 5];
console.log('arr:', e);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e)); //In JavaScript, arrays are a special type of object.




// Activity 4: Reassigning Variables--------------------------------------------------------
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let f = "let wala assign ho gya";
console.log(f);

f = "reassign ho gya";
console.log(f);




// Activity 5: Understanding const------------------------------------------------------------
// * Task 6: Try reassigning a variable declared with const and observe the error.

const g = "const wala assign ho gya";
console.log(g);
// g = "nahi hua"; //TypeError: Assignment to constant variable.




// Feature Request:---------------------------------------------------------------------------
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

var num = 42;
console.log('Value:', num,",", 'Type:', typeof num);

var str = "Chai pee lo";
console.log('Value:', str,",", 'Type:', typeof str); 

var bool = true;
console.log('Value:', bool,",", 'Type:', typeof bool); 

var obj = { name: "raamu kaka", age: 69 };
console.log('Value:', obj,",", 'Type:', typeof obj); 

var arr = [1, 2, 3, 4, 5];
console.log('Value:', arr,",", 'Type:', typeof arr); 

var undef;
console.log('Value:', undef,",", 'Type:', typeof undef); 

var nullVar = null;
console.log('Value:', nullVar,",", 'Type:', typeof nullVar); 

var func = function() { return "Hello"; };
console.log('Value:', func,",", 'Type:', typeof func);

var sym = Symbol("id");
console.log('Value:', sym,",", 'Type:', typeof sym);

var bigInt = 9007199254740991n;
console.log('Value:', bigInt,",", 'Type:', typeof bigInt);


// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// let: Can be reassigned.
// const: Cannot be reassigned.
