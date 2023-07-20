import Blog from "../models/Blog.js";

const getAboutPage = (req, res) => {
    res.render('about');
}

const getAddPage = (req, res) => {
    res.render('add');
}

const getEditPage = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    res.render('edit', { blog });
}

export default {
    getAboutPage,
    getAddPage,
    getEditPage,
}