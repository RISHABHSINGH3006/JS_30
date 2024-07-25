// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling-----------------------------------------------------------

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

function fna() {
    const element = document.getElementById('taska');
    element.textContent = "Sing.rishhh...";    
}

const btn1 = document.getElementById('ta');
btn1.addEventListener("click", fna);

// Task 2: Add a double-click event listener to an image that toggles its visibility.

const task2 = document.getElementById('task2');

task2.addEventListener("dblclick", function() {
    if (task2.style.display === 'none') {
        task2.style,display = 'block';        
    }
    else{task2.style.display = 'none'}
});





// Activity 2: Mouse Events-------------------------------------------------------------------

// Task 3: Add a mouseover event listener to an element that changes its background color.
const task3 = document.getElementById('task3');
task3.addEventListener("mouseover", function(){
    task3.style.backgroundColor = "red";
});
// Task 4: Add a mouseout event listener to an element that resets its background color.
task3.addEventListener("mouseout", function(){
    task3.style.backgroundColor = "";
});




// Activity 3: Keyboard Events----------------------------------------------------------------

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const task5 = document.getElementById("task5");
task5.addEventListener("keydown", (event) => {
    console.log(`Key pressed ${event.key}`) 
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('inputField');
    const t6 = document.getElementById("t6");

    inputField.addEventListener('keyup', (event) => {
        // t6.textContent = `Key pressed: ${event.key}`;
        t6.textContent = inputField.value;
    });
});




// Activity 4: Form Events--------------------------------------------------------------------

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.addEventListener('DOMContentLoaded', (event) => {
    const myForm = document.getElementById('task7');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(myForm); // Create a FormData object from the form
        
        const formProps = Object.fromEntries(formData); // Convert FormData to an object
        console.log(formProps); // Log the form data to the console
    });
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.addEventListener('DOMContentLoaded', (event) => {
    const t8 = document.getElementById('t8');
    const task8 = document.getElementById('task8');

    t8.addEventListener('change', (event) => {
    task8.textContent = `Selected value: ${t8.value}`;
    });
});





// Activity 5: Event Delegation---------------------------------------------------------------

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.addEventListener('DOMContentLoaded', (event) => {
    const myList = document.getElementById('task9');

    myList.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            console.log(`Clicked item: ${event.target.textContent}`);
        }
    });
});


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.addEventListener('DOMContentLoaded', (event) => {
    const parentList = document.getElementById('parentList');
    const addItemButton = document.getElementById('addItemButton');

    // Event delegation: Listen for click events on the parent element
    // parentList.addEventListener('click', (event) => {
    //     if (event.target && event.target.nodeName === 'LI') {
    //         console.log(`Clicked item: ${event.target.textContent}`);
    //     }
    // });

    // Add a new list item dynamically when the button is clicked
    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `New Item ${parentList.children.length + 1}`;
        parentList.appendChild(newItem);
    });
});




// Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// Understand and handle form events.
// Implement event delegation to manage events on dynamically added elements.
// Make web pages interactive by responding to various user actions.