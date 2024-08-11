let book = {
  Title: "JavaScript: The Definitive Guide",
  Author: "David Flanagan",
  PublishedYear: 2020,
  Genre: "Programming",
};

console.log(book.Title);
console.log(book.PublishedYear);

book.pageCount = 1096;
book.ISBN = "978 - 1491952023";
book.PublishedYear = 2021;
book.Author = ["David Flanagan", "Another Author"];
book.revs = [{ reviewer: "Book Critic", comment: "A comprehensive guide" }];

console.log(book.PublishedYear);
console.log(book.pageCount);
console.log(book.ISBN);
console.log(book.PublishedYear);
console.log(book.Author);
console.log(book.revs);
