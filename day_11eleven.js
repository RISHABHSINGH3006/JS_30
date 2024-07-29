//  Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises---------------------------------------------------------

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("primise resolved after two seconds.");
    }, 2000);
});

promise1.then((message) => {
    console.log(message);
});


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using catch()
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("primise rejected after two seconds."));
    }, 2000);
});

promise2.catch((error) => {
    console.error(error.message);
});




// Activity 2: Chaining Promises--------------------------------------------------------------

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchdata(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(message);
            resolve(`${message} - Data Received`);
        },delay);
    });
}

fetchdata(`Fetching Data from server 1`, 1000)

.then((data1)=>{
    console.log(data1);
    return fetchdata(`Fetching data from server 2`, 2000)
})
.then ((data2)=> {
    console.log(data2);
    return fetchdata(`Fetching data from server 3`, 1500)
})
.then((data3)=>{
    console.log(data3);
    console.log(`all data fetched successfully.`);
})
.catch((error)=> {
console.error(`Error Fetching data`, error);
});




// Activity 3: Using Async/Await--------------------------------------------------------------

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
function fetchdat(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(message);
        },delay);
    });
}

async function logResolvedValue() {
    try{
        const message = await fetchdat(`Data received after 2 seconds`, 2000);
        console.log(message);
    }catch (error) {
        console.error(`Error:`, error);
    }
}

logResolvedValue();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function fetchDataWithError(message, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
             reject(new Error(message));
        }, delay);
    });
}

async function handleRejectedPromise() {
    try {
        const message = await fetchDataWithError('Promise rejected after 2 seconds', 2000);
        console.log(message);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchDataWithError();




// Activity 4: Fetching Data from an API------------------------------------------------------

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(apiUrl)
.then((response)=>{
    if(!response.ok){
        throw new error('Netwok response was not ok');
    }
    return response.json();
})
.then((data) => {
    console.log('Response data:', data);
})
.catch((error) => {
    console.error('Fetch error:', error);
});


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        console.log('Response data:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
fetchData();




// Activity 5: Concurrent Promises------------------------------------------------------------

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function fetchData(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

const promisea = fetchData('Data from Server 1', 1000);
const promiseb = fetchData('Data from Server 2', 2000);
const promisec = fetchData('Data from Server 3', 1500);


Promise.all([promisea, promiseb, promisec])
    .then((values) => {
        console.log('All promises resolved:');
        values.forEach((value, index) => {
            console.log(`Promise ${index + 1}: ${value}`);
        });
    })
    .catch((error) => {
        console.error('One or more promises rejected:', error);
    });




// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises

function fetchData(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

const promiseA = fetchData('Data from Server 1', 1000);
const promiseB = fetchData('Data from Server 2', 2000);
const promiseC = fetchData('Data from Server 3', 1500);

Promise.race([promiseA, promiseB, promiseC])
    .then((value) => {
        console.log('First resolved promise:', value);
    })
    .catch((error) => {
        console.error('Promise rejected:', error);
    });

