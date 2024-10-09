import { Request } from "express";
import multer, { diskStorage, FileFilterCallback } from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'documents'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const isValid = file.mimetype.startsWith('image/')
    cb(null, isValid);
}

const upload = multer({ storage });
export default upload;

//Este archivo uploads.ts no tiene un endpoin específico, 
//se espera que se haga localhost://3000/download?file="nombre del archivo"
//con el file system pregunto si el file existe y lo mando, si no existe, un 404
//crear el endpoind que te deje 

