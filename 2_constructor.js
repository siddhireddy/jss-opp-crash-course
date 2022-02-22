// Constructor
function Book(title, author, year) {
 this.title = title;
 this.author = author;
 this.year =  year;

 this.getSummary = function() {

return `${this.title} was written by ${this.author} in ${this.year}`;
 };
}
// Iauthornstatiate an Object
const book1 = new Book('Book One', 'John Deo' , '2013');
const book2 = new Book('Book Two', 'Jane Deo' , '2016');

console.log(book2.getSummary());

