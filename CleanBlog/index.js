import express from "express";
import dotenv from 'dotenv';
import Blog from "./models/Blog.js";
import mongoose from "mongoose";
import ejs from "ejs";
import fs from 'fs';
import methodOverride from "method-override";
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
app.use(fileUpload())
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))

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

app.get('/add', (req, res) => {
    res.render('add');
})

app.get('/blog/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('blog', { blog });
})

app.post('/blog', async (req, res) => {
    const uploadDir = 'public/uploads';
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    const uploadImage = req.files.image;
    const uploadPath = __dirname + '/public/uploads/' + uploadImage.name;
    uploadImage.mv(uploadPath, async () => {
        await Blog.create({
            ...req.body,
            backroundImage: '/uploads/' + uploadImage.name,
        })
    });
    res.redirect('/');
})

app.get('/blog/edit/:id', async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    res.render('edit', { blog });
})

app.put('/blog/:id', async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id })
    blog.author = req.body.author;
    blog.title = req.body.title;
    blog.subtitle = req.body.subtitle;
    blog.detail = req.body.detail;

    blog.save();
    res.redirect(`/blog/${blog._id}`);
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
})