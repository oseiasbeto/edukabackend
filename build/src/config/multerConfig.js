"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uploadFolder = path_1.default.resolve(__dirname, "..", "uploads");
exports.default = {
    directory: uploadFolder,
    storage: multer_1.default.diskStorage({
        destination: uploadFolder,
        filename(req, file, callback) {
            const fileName = `${crypto_1.default.randomBytes(16).toString("hex")}-${file.originalname}`;
            return callback(null, fileName);
        }
    }),
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpg',
            'image/png',
            'image/jpeg'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('O arquivo deve estar no formato: .jpg, .png ou .jpeg'));
        }
    }
};
