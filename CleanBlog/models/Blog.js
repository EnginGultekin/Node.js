import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    author: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    subtitle: {
        type: String,
        require: false,
    },
    detail: {
        type: String,
        require: true,
    },
    backroundImage: {
        type: String,
        require: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('Blog', BlogSchema);