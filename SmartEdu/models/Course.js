import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        require: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('Course', CourseSchema);
