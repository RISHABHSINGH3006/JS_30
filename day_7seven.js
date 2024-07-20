// Day 7: Objects
// Tasks/Activities:

// Activity 1: Object Creation and Access-----------------------------------------------------
// Task 1. Create an object representing a book with properties like title, author, and year, and log the object to the console

let book = {
    title: "The Unknowns",
    author: "Rishabh Singh",
    year: 2028,
    // task 3-
    getTitleAndAuthor: function() {
        return `author of the book is ${book.title} by ${book.author}`;   
    },
    // task 4-
    updateYear: function(newYear) {
        this.year=newYear;
    },
    // Task 7-
    titleYear: function(){
        return `title of the book is ${this.title} and published in year ${this.year}`;
    }
};
console.log(book);



// Task 2: Access and log the title and author properties of the book object.
console.log(book.title,",",book.author);




// Activity 2: Object Methods-----------------------------------------------------------------
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
console.log(book.getTitleAndAuthor());

// Task 4: Add a method object. to the book object that takes a parameter (year) and updates the book's year property, then log the updated
book.updateYear(2027);
console.log(book);  




// Activity 3: Nested Objects-----------------------------------------------------------------

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "shree raam pustakaalay",
    books: [
        {
            title: "pink appple",
            author: "rose merry"   
        },
        {
            title: "the mamba mentality",
            author: "cobe brayan"
        }

    ]
}
console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});




// Activity 4: The this Keyword---------------------------------------------------------------

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(book.titleYear());




// Activity 5: Object Iteration---------------------------------------------------------------

// Task 8: Use a for....in loop to iterate over the properties of the book object and log each property and its value.
for (let property in book){
    if(book.hasOwnProperty(property)){
        console.log(`${property} : ${book[property]}`);
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));

