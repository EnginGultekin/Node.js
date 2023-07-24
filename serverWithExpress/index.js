import express from 'express';

const app = express(); 

app.get('/', (req, res) => {
    res.status(200).send('INDEX PAGE')
})

app.get('/about', (req, res) => {
    res.status(200).send('ABOUT PAGE')
})

app.get('/contact', (req, res) => {
    res.status(200).send('CONTACT PAGE')
})

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND')
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server started working on port ${port}...`);
})