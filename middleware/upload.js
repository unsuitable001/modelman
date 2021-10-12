const path = require("path");
const util = require("util");
const multer = require("multer");
const maxSize = 200 * 1024 * 1024;

function stripPath(pfad) {
  return path.normalize(pfad).replace(/^(\.\.(\/|\\|$))+/, "");
}

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/bucket");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, stripPath(file.originalname));
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
