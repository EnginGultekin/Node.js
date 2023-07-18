import express from "express";
import dotenv from 'dotenv';
import ejs from "ejs";
import Blog from "./models/Blog.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('Connnected DB'))
    .catch((error) => console.log(error));

//Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // Body parser
app.use(express.json())

app.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.render('index', {
        blogs,
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/add', (req, res) => {
    res.render('add');
})

app.get('/blog/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('blog', { blog });
})

app.post('/create_blog', async (req, res) => {
    await Blog.create(req.body);
    res.redirect('/');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
})