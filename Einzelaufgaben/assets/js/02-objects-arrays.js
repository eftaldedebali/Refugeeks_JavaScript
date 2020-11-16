/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

// add a new book to the books object
// using dot notation

books.book4 = 'Verbrechen und Strafe';
//console.log(books)
// using square bracket notation
books['book5'] = 'Harry Potter'
//console.log(books)
// remove a book from the books object

delete books.book3;
//console.log(books)
// log the third book
console.log(books.book4);
//console.log(books)
// iterate over the books and log every single one
var j= "";
for (x in books) {
  j += books[x] + '\n';
}

console.log(j)

/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array

movies.push("Forest Gump")

// remove the book „Call me by your name“ from the books object

delete movies[2];

// log the first movie

console.log(movies);

// iterate over the movies and log every single one 
var i= "";
for (x in movies) {
  i += movies[x] + '\n';
}
console.log(i);