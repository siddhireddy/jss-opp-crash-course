class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year= year;
       
    }
   getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`; 

   } 

   getAge() {
    return `${this.title} is ${years} years old`;
   
   }

   revise(newYear) {
       this.year = newYear;
       this.revised = true;
   }

   static topBookStore() {
       return 'Branes & Noble';
   }
}
// INSTANTIATE OBJECT
const book1 = new Book('Book One', 'John Doe', '2013');

//console.log(book1);
//book1.rervise('2018');
//console.log(book1);

console.log(Book.topBookStore());