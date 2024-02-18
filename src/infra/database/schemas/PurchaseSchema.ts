import mongoose, { Document, Schema } from "mongoose";

type Purchase = Document & {}

const PurchaseSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    course: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        educator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    },
    customer: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: Number,
        location: {
            country: String,
            pronvice: String,
            city: String,
            neigbourhood: String
        }
    },
    isPayed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

export default mongoose.model<Purchase>("Purchase", PurchaseSchema)