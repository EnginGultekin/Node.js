import Blog from "../models/Blog.js";
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getAllBlogs = async (_, res) => {
    const blogs = await Blog.find({})
    res.render('index', {
        blogs,
    });
}

const getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render('blog', { blog });
}

const createBlog = async (req, res) => {
    const uploadDir = 'public/uploads';
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    const now = Date.now();
    const uploadImage = req.files.image;
    const uploadPath = __dirname + '/../public/uploads/' + now + '-' + uploadImage.name;
    uploadImage.mv(uploadPath, async () => {
        await Blog.create({
            ...req.body,
            backroundImage: '/uploads/' + now + '-' + uploadImage.name,
        })
    });
    res.redirect('/');
}

const updateBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id })
    blog.author = req.body.author;
    blog.title = req.body.title;
    blog.subtitle = req.body.subtitle;
    blog.detail = req.body.detail;

    await blog.save();
    res.redirect(`/blog/${blog._id}`);
}

const deleteBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    let deletedBlog = __dirname + '/../public' + blog.backroundImage;
    fs.unlinkSync(deletedBlog);
    await Blog.findByIdAndRemove(blog._id);
    res.redirect('/');
}


export default {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
}