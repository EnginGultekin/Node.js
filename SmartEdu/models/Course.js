import mongoose from 'mongoose';
import slugify from 'slugify';

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
    slug: {
        type: String,
        unique: true,
    },
});

// We created slug for course ids
CourseSchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true,
    });
    next();
});

export default mongoose.model('Course', CourseSchema);
