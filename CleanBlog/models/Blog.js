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
    detail: {
        type: String,
        require: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('Blog', BlogSchema);