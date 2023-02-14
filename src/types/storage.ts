import multer from "multer";
import { HttpError } from "./custom.error";
import { uuid } from "uuidv4";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, uuid()+file.originalname.match(/\.(jpg|jpeg|png)$/)?.[0] );
    }
});

const upload = multer({ storage: storage,
    limits: { fileSize: 1000000, files: 1 },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new HttpError({ error: "Please upload a valid file" }, 415));
      }
      cb(null, true);
    } 
});

export default upload;
