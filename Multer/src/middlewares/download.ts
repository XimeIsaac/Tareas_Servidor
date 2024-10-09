import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const getItem = (req: Request, res: Response): void => {
    const PdfFile = req.query.file as string;

    if (!PdfFile) {
        res.status(400).send('Filename must be included');
        return; 
    }

    const PdfPath = path.join(__dirname, '..', '..', 'Documents', PdfFile);

    fs.access(PdfPath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('Archivo no encontrado:', err);
            res.status(404).send('Archivo no encontrado');
            return; 
        }

        res.download(PdfPath, PdfFile, (err) => {
            if (err) {
                console.error('Error downloading the file:', err);
                res.status(500).send('Error downloading the file');
            }
        });
    });
};


