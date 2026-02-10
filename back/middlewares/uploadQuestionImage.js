const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");

const uploadDirectory = path.join(__dirname, "..", "public", "uploads", "questions");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdirSync(uploadDirectory, { recursive: true });
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname).toLowerCase();
        const uniqueName = `${Date.now()}-${crypto.randomUUID()}${extension}`;
        cb(null, uniqueName);
    },
});

function fileFilter(req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase();
    const allowedExtension = extension === ".jpg" || extension === ".jpeg" || extension === ".png";
    const allowedMime = file.mimetype === "image/jpeg" || file.mimetype === "image/png";

    if (!allowedExtension || !allowedMime) {
        return cb(new Error("Apenas arquivos JPG e PNG sao permitidos"));
    }

    cb(null, true);
}

const uploadQuestionImage = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

module.exports = uploadQuestionImage;
