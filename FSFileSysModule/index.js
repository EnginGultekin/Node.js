import { readFile, writeFile, appendFile, unlink } from 'node:fs'

// Write File: writeFile('exp.json', '{"name" : "Lugan", "age": 31}', 'utf8', callback);
writeFile('employee.json', '{"name": "Lugan Han", "salary": 2000}', (err) => {
    if (err) console.log(err);
    else {
        readFile('employee.json', 'utf8', (err, data) => {
            if (err) console.log(err);
            else {
                console.log(data);
                // If you want to update the existing data, simply write "WriteFile" instead of "appendFile". 
                // Adding Data to File: appendFile('message.txt', 'data to append', 'utf8', callback);
                appendFile('employee.json', '{"name": "Hakim Kadir", "salary": 3500}', (err) => {
                    if (err) console.log(err);
                    else {
                        readFile('employee.json', 'utf8', (err, data) => {
                            if (err) console.log(err);
                            else {
                                console.log(data);
                                // Delete File:  unlink('path/file.txt', callback);
                                unlink('employee.json', (err) => {
                                    if (err) console.log(err);
                                    else console.log("Delete operation successful");
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
