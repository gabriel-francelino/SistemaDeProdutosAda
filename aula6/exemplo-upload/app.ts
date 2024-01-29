import express, { Request, Response } from 'express';
import path from 'path';
import multer from 'multer';

interface MulterRequest extends Request {
  files?: Array<any>;
}

const app = express();

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: Function) => {
    cb(null, 'uploads/');
  },
  filename: (req: Request, file: Express.Multer.File, cb: Function) => {
    // Padrão de nomenclatura: nomeOriginal_timestamp.extensao
    const { originalname } = file; // agua-com-gas.jpeg
    const nameParts = originalname.split('.'); // ['agua-com-gas', 'jpeg']
    const fileName = `${nameParts[0]}_${Date.now()}.${nameParts[1]}`;

    cb(null, fileName);
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new Error('Tipo de arquivo inválido'));
  }
}

const limits = {
  fileSize: 1024 * 1024 // 1MB
}

const upload = multer({ storage, fileFilter, limits }).single('arquivo');
const uploads = multer({ storage, fileFilter, limits }).array('arquivos');

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve('public/form.html'));
});

app.get('/success', (req: Request, res: Response) => {
  res.sendFile(path.resolve('public/success.html'));
});

app.get('/error', (req: Request, res: Response) => {
  res.sendFile(path.resolve('public/error.html'));
});

app.post('/upload', (req: Request, res: Response) => {
  console.log(req.file);

  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          console.error('Tamanho máximo excedido');
        }
      }
      res.redirect('error');
    } else {
      res.redirect('success');
    }
  });
});

app.post('/uploads', uploads, (req: MulterRequest, res: Response) => {
  console.log(req.files);

  if (req.files.length > 0) {
    res.redirect('success');
  } else {
    res.redirect('error');
  }
});

app.listen(3000, () => console.log('Servidor inicializado'));