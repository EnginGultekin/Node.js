import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import pageRouter from './routers/pageRouter.js';
import courseRouter from './routers/courseRouter.js';

const app = express();
dotenv.config();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

//Routers
app.use('/', pageRouter);
app.use('/courses', courseRouter);

const port = 3000;
app.listen(port, () => {
    //console.log(`Server started on port ${port}...`);
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log('Connnected DB'))
        .catch((error) => console.log(error));
});
