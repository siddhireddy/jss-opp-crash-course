// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year =  year;
   
   }

   // GETSUMMARY 
   Book.prototype.getSummary =function() {
return `${this.title} was written by ${this.author} in ${this.year}`;  
 };

 // MAGZINE CONSTRUCTOR

 function Magazine(title, author, year, month) {
     Book.call(this, title, author, year);

     this.month = month;
 }

 // INHERIT PROTOTYPE

Magazine.prototype = Object.create(Book.prototype);

// INSTANTIATE MAGAZINE OBJECT

const mag1 = new Magazine('Mag One', 'John  Doe', '2018', 'Jan');

// USE MAGAZINE CONSTRUCTOR
Magazine.prototype.constructor = Magazine;

console.log(mag1);

