import crypto from "crypto"
import multer from "multer"
import path  from "path"
const uploadFolder = path.resolve(__dirname, "..", "uploads")

export default {
    directory: uploadFolder,
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename(req, file, callback) {
            const fileName = `${crypto.randomBytes(16).toString("hex")}-${file.originalname}`
            return callback(null, fileName)
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
            cb(null, true)
        } else {
            cb(new Error('O arquivo deve estar no formato: .jpg, .png ou .jpeg'))
        }
    }
}