import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import ejs from "ejs";
import methodOverride from "method-override";
import fileUpload from "express-fileupload";
import blogController from "./controllers/blogController.js";
import pageController from "./controllers/pageController.js";

const app = express();
dotenv.config();

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

app.get('/', blogController.getAllBlogs);
app.get('/blog/:id', blogController.getBlog);
app.post('/blog', blogController.createBlog);
app.put('/blog/:id', blogController.updateBlog);
app.delete('/blog/:id', blogController.deleteBlog);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/blog/edit/:id', pageController.getEditPage);

const port = 3000;
app.listen(port, () => {
    //console.log(`Server started on port ${port}...`);
    mongoose.connect(process.env.DB_CONNECTION_STRING)
        .then(() => console.log('Connnected DB'))
        .catch((error) => console.log(error));
})