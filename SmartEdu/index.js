import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import pageRouter from './routers/pageRouter.js';
import coursesRouter from './routers/courseRouter.js';
import categoryRouter from './routers/categoryRouter.js'

const app = express();
dotenv.config();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routers
app.use('/', pageRouter);
app.use('/courses', coursesRouter);
app.use('/categories', categoryRouter);

const port = 3000;
app.listen(port, () => {
    //console.log(`Server started on port ${port}...`);
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log('Connnected DB'))
        .catch((error) => console.log(error));
});
