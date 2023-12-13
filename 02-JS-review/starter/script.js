const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
//allows you to take values from arrays or objects and set them to individual variables

//Rest Operator
//allows you to get the rest of the values of the array or objects and applies that into an array or object / so basically allows you to get the REST of the values left over of an array

//Spread Operator
//Same syntax (...) as the Rest Operator, and can be used in both arrays and objects
//Allows you to create a new array with all values and adds a new one to the end
//Takes all the values out of the array and puts them into a brand new array and the new value without having a seperated array
//With objects, allows you to add new properties and update existing ones
//Spreads out properties from object to a new object
// can also use it to update/override properties from an object
// will only work if applied after a property is declared so at the end of the updated object
// adds an additional value to the array

/*
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  //Adding a new property, this is because this is a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
updatedBook;

//Template Literals
//Template Literals is an ES6 Javascript feature that allows you to create strings that contains javascript variables or javascript expression inside of a string
// Template literals use back ticks `` instead of normal speech marks ''
//Anything that can produce a value can be placed in the block ${}

//Arrow function
//a new way to write a function, made in ES6
//Better for one liner functions

//old way of writing function, better for longer functions
// function getYear(str) {
//   return str.split("-")[0];
// }
//multiple liners will need the return keyword and wirly braces
//important for call back functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));
const summary = `${title}, a ${pages}--page long book was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//Ternary Operator
//To define values based on a condition
// Can be used in situations when you cant use an if/else statement
//Has three operands/three parts in order to work
// has a condition, then a result of the operation if the condition is true then the results of if the operation is false
// similar to a function, it will always return a value
//to simplify, if pages is greater 1000, then value is a thousand if not then value is less than 1000
// if else statement is a statement so it doesn't return a value so it's not possible to use in certain scenarios
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//Short Circuiting on &&
//e.g. and and or can short circuit
//in certain conditions, the operator will return the first value and not look at the second one.
//and operator short circuits when the first value is false then immediately returns that first value
// if value is false, immediately returns false
console.log(true && "string");
console.log(false && "string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
// truthy is anything that isn't falsy
console.log("jonas" && "Some string");
console.log(0 && "Some String");

//Short Circuiting on ||
//This is the opposite of the and where it short circuits whenever the first operand is true, then returns it
//Will only short circuit if the first value is true and doesn't look at the second value
console.log(true || "Some String");
console.log(false || "Some String");

//true || anything = true e.g. true || console.log('hello') = true
//true || true = true
//true || false = true
//false || anything will read the value e.g. false || console.log('hello') = hello
//this is because false or something could be true

//false && anything = false e.g. false && console.log('hello) = false
//true && anything = true e.g. true && console.log('hello) = hello
//this is because it doesn't know if it's going to be false or true

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

//This can go wrong, because it works for falsy values
//because one of the values had 0 review counts, it instead reads no data instead of 0, which is incorrect information, so sometimes short circuiting may not be good
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

//Nullish coalescing operator
// //New JS operator, which works similar to \\ but also short circuit for falsy valuees
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

//Optional Chaining
// add value from two different objects together - for example two different review count with different key names from the parent object
// very easy
//it's good to use optional chaining as much as possible
//it is a ? before the end of the object, if a value is undefined, it javascript will no longer try to read, the lower value, e.g. reviewsCount
// the ?? e.g. the Nullish coalescing operator operator helps with situations like this, so if there is no value it can display another value, in this case 0
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

*/

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
const books = getBooks();
books;
//Map Method
//Map method will loop through an array and return a new array with the same length with some operation applied, to each of the elements of the original array
//Easier terms, the method will loop through the array and return a new array and change the value of the elements in the new array
// it is also possible to chain array functions as well so filter.map.reduce and so much more
//this will map through the array and return the values in the array multiplied by two
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//Filter Method
// Filters out some elements of the array based on a condition
// if the result of the condition is true, the element/elements will go into the current array, if it's false it will get filtered out
// you can filter inside of a filter, this is called chaining
//Filters anything that doesn't meet the condition
const longBooksWithMovie = books
  .filter((book) => book.pages > 500) //  .filter((book) => book.pages > 500 && book.hasMovieAdaptation) - this also works
  .filter((book) => book.hasMovieAdaptation); // this is already a boolean value, so no condition needs to be added into the callback function
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure")) // include always returns true or false, so if the genres include adventure it will filter in the books with adventures
  .map((book) => book.title); // after filtering out genres with adventure we can get the titles of books by mapping it
adventureBooks;

//Reduce Method
// the most versatile and powerful array method
// can probably implement all the other methods, using the reduce, but there is no point since it's easier to just use them as they are
//commonly used to add together numbers or to perform operations/mathematical operations with numbers
//acc(accumilator) the acc is the current value of the final

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // it will get called wit hthe current element and the current value ofthe accumilator which starts at 0 / accumilate means to change
pagesAllBooks;
