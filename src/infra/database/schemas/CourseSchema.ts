import mongoose, { Document, Schema } from "mongoose";

type Course = Document & {}

const CurseSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: ""
    },
    idioma: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ["a", "r", "n", "p"],
        default: "n"
    },
    isPushed: {
        type: Boolean,
        default: false
    },
    location: {
        type: String,
        default: ""
    },
    daysatweek: {
        type: String,
        default: ""
    },
    dataStart: {
        type: String,
        default: ""
    },
    dataEnd: {
        type: String,
        default: ""
    },
    timeStart: {
        type: String,
        default: ""
    },
    timeEnd: {
        type: String,
        default: ""
    },
    format: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    topics: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    educator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
})

export default mongoose.model<Course>("Course", CurseSchema)