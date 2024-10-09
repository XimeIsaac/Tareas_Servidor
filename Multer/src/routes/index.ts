import { Router, Request, Response } from "express";
import upload from "../middlewares/upload";
import { getItem } from "../middlewares/download";

const router = Router();

router.get('', (req, res) => {
    res.send('Api works!');
})

router.post('/upload', upload.single('file'),(req, res) => {
    console.log('Archivo: ', req.file);
    if (req.file) {
        res.send('Se subió el archivo!');
    } else {
        res.status(400).send('Archivo no soportado');
    }
})


router.post('/uploads', upload.single('file'), (req, res) => {
    if (req.file) {
        res.send('Se subió el archivo!');
    } else {
        res.status(400).send('Archivo no soportado');
    }
});

//Buena práctica hacer el manejo de errores en el middleware? --preguntar en clase--
router.get('/download', getItem);

export default router;