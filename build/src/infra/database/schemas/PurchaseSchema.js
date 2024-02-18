"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const PurchaseSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    course: {
        id: {
            type: mongoose_1.default.Schema.Types.ObjectId,
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    },
    customer: {
        id: {
            type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("Purchase", PurchaseSchema);
