"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDb {
    async connect() {
        const connection = await mongoose_1.default.connect("mongodb+srv://oseiasbetodev:ARICLENES22@cluster0.4raxki7.mongodb.net/edukaafrica?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`MongoDB connected: ${connection.connection.host}`);
    }
}
exports.MongoDb = MongoDb;
