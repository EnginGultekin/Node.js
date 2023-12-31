
const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
]

// print books list to screen
const listBooks = () => {
    books.map((book) => {
        console.log(book.name);
    })
}

// The addBook function takes a callback function as an argument
const addBook = (newBook, callback) => {
    books.push(newBook);
    callback()
}


addBook({name: "Kitap 4", author: "Yazar 4"}, listBooks);