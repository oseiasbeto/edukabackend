import mongoose, { Document, Schema } from "mongoose";

type Module = Document & {}

const ModuleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    description: String,
    idioma: String,
    freeAt: {
        type: Number,
        default: null
    },
    lessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        required: true
    }],
    isActive: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

export default mongoose.model<Module>("Module", ModuleSchema)