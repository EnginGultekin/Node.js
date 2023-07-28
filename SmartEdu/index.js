import express from 'express';
import pageRouter from './routers/pageRouter.js';

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

//Routers
app.use('/', pageRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
