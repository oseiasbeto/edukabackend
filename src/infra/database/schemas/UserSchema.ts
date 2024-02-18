import mongoose, { Document, Schema } from "mongoose";

type User = Document & {}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
        max: 50,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ]
    },
    avatar: {
        type: String,
        default: "http://localhost:3333/files/userdefault.png"
    },
    description: String,
    phone: String,
    id: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    social: {
        facebook: {
            type: String,
            default: ""
        },
        twitter: {
            type: String,
            default: ""
        },
        youtube: {
            type: String,
            default: ""
        }
    },
    balance: {
        type: Number,
        default: 0
    },
    location: {
        country: String,
        pronvice: String,
        city: String,
        neigbourhood: String
    },
    isChecked: {
        type: Boolean,
        default: true
    },
    emailConfirmToken: {
        type: String,
        select: false
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    },
},
    {
        timestamps: true
    })

export default mongoose.model<User>("User", UserSchema)