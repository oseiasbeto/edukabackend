import mongoose, { Document, Schema } from "mongoose";

type Lesson = Document & {}

const LessonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    moduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    description: String,
    idioma: {
        type: String,
        default: "Português"
    },
    videoId: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

export default mongoose.model<Lesson>("Lesson", LessonSchema)