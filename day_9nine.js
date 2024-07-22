// Day 9: DOM Manipulation
// Tasks/Activities:


// Activity 1: Selecting and Manipulating Elements--------------------------------------------

// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("para").textContent='hello mr. Singh........'

// Task 2: Select an HTML element by its class and change its background color.
const elements = document.getElementsByClassName("bgcol");

for(let i=0; i < elements.length; i++){
    elements[i].style.backgroundColor = 'lightgreen';
}




// Activity 2: Creating and Appending Elements-----------------------------------------------

// * Task 3: Create a new div element with some text content and append it to the body.
const newdiv = document.createElement("div");
newdiv.textContent = 'here is the new div';
document.body.appendChild(newdiv);

// * Task 4: Create a new li element and add it to an existing ul list.
const ulElement = document.getElementById("myList");
const newLi = document.createElement("li");
newLi.textContent = "four";
ulElement.appendChild(newLi);


// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM. 
const removea = document.getElementById("re");

if(removea){
    removea.remove();
}

// Task 6: Remove the last child of a specific HTML element.

const parentElement = document.getElementById('myList');
 if(parentElement.lastElementChild){
    parentElement.removeChild(parentElement.lastElementChild);
 }





// Activity 4: Modifying Attributes and Classes-----------------------------------------------

// * Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const imge = document.getElementById('im');
// imge.src = 'https://i.pinimg.com/236x/dd/c5/57/ddc557c04345637f3aaae71a91e5530b.jpg'

// * Task 8: Add and remove a CSS class to/from an HTML element.
function addClass() {
    const element = document.getElementById("myElement");
    element.classList.add("highlight");
}

function removeClass() {
    const element = document.getElementById("myElement");
    element.classList.remove("highlight");
}




// Activity 5: Event Handling-----------------------------------------------------------------

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function conte() {
    const element = document.getElementById("para");
    element.textContent = "change ho gya..................";
}

const butt = document.getElementById('changecontent');
butt.addEventListener("click", conte);

// Task 10: Add a mouseover event listener to an element that changes its border color.

function changeBorderColor() {
    const element = document.getElementById("myElementt");
    element.style.borderColor = "red";
}

function resetBorderColor() {
    const element = document.getElementById("myElementt");
    element.style.borderColor = "black";
}

const elementy = document.getElementById("myElementt");
elementy.addEventListener("mouseover", changeBorderColor);
elementy.addEventListener("mouseout", resetBorderColor);




