/*  --- First Chapter ---

const promise = new Promise((resolve, reject) => { 
});

const promise1 = new Promise((resolve, reject) => { 
    resolve(); 
});

const promise2 = new Promise((resolve, reject) => {
    resolve("OK");
});
const promise3 = new Promise((resolve, reject) => {
    reject()
});

const promise4 = new Promise((resolve, reject) => {
    reject("Error"); 
});

console.log(promise);
// output : Promise { <pending> }

console.log(promise1);
// output : Promise { undefined }

console.log(promise2);
// output : Promise { 'OK' }

console.log(promise3);
// output : UnhandledPromiseRejection Error

console.log(promise4);
// output : Promise { <rejected> 'Error' }  and UnhandledPromiseRejection Error
*/

/*  --- Second Chapter ---

const promise = new Promise((resolve, reject) => {
    resolve("Data Received")
    reject("Connection Error");
});

promise
    .then((value) => {
        console.log(value);
    }).catch((error) => {
        console.log(error);
    })

// If both are written, only one of the resolve and reject returns a value
// Output : Data Received
*/

const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
];


const listBooks = () => {
    books.map((book) => {
        console.log(book.name);
    });
};


const addBook = (newBook) => {
    const promise = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(resolve)
        //reject('Error');
    })
    return promise;
}

addBook({ name: "Kitap 4", author: "Yazar 4" })
    .then(() => {
        console.log("New List");
        listBooks();
    })
    .catch((error) => {
        console.log(error);
    })
