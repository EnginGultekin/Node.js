import { readFile, writeFile, appendFile, unlink} from 'node:fs'

// Read File : readFile('/etc/passwd', 'utf8', callback);
readFile('FileRead.txt', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
})

// Write File: writeFile('exp.txt', 'Hello Node.js', 'utf8', callback);
writeFile('WriteFile.txt', 'I am Lugan Han, I am King', (err) => {
    if (err) console.log(err);
    console.log("Write operation successful Text");
})

// Write File: writeFile('exp.json', '{"name" : "Lugan", "age": 31}', 'utf8', callback);
writeFile('WriteFile.json', '{"name" : "Lugan", "age": 31}', (err) => {
    if (err) console.log(err);
    console.log("Write operation successful Json");
})


// Adding Data to File: appendFile('message.txt', 'data to append', 'utf8', callback);
appendFile('WriteFile.txt', '\nI am Back', (err) => {
    if (err) console.log(err);
    console.log("Append operation successful");
})


// Delete File:  unlink('path/file.txt', callback);
unlink('DeleteFile.txt', (err) => {
    if(err) console.log(err);
    console.log("Delete operation successful");
})

// Let's create the deleted file again
writeFile('DeleteFile.txt', 'For Deletion', (err) => {
    if (err) console.log(err);
    console.log("Create DeleteFile successful");
})


/**************************************** Folder Operations ****************************************/

import {mkdir, rmdir} from 'node:fs';

/* If you want to create nested folders instead of single folders, 
{ recursive: true } parameter should be added to the function. */ 
mkdir('data/img/1', {recursive: true}, (err) => {
    if(err) console.log(err);
    console.log("Create Folder successful\n")
}) 

/* In the folder deletion process, the { recursive: true } parameter should 
be added to the function when it is desired to delete not individual but nested folders. */ /*
rmdir('data/img/1', (err) => {
    if(err) console.log(err);
    console.log("Delete Folder successful\n")
})

rmdir('data/img', {recursive: true}, (err) => {
    if(err) console.log(err);
    console.log("Delete Folder successful\n")
})
*/