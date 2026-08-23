const books = [                                                              // created function name books //
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },                        // Created object with id, title, and author properties //
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    {id: 6, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

const newBook = books.map(function(book) {              // created a new variable called newBook and used the map method to iterate over the books array //
    return {
        id: book.id, 
        title: book.title,                         // returned a new object with the same properties as the original book object //
        author: book.author
    }
        
});

console.log(newBook);                   // logged the newBook array to the console //