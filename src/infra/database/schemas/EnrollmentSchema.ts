import mongoose, { Document, Schema } from "mongoose";

type Enrollment = Document & {}

const EnrollmentSchema = new Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    purchase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchase",
        required: true
    },
},
{
    timestamps: true
})

export default mongoose.model<Enrollment>("Enrollment", EnrollmentSchema)