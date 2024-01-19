import express, { Request, Response } from 'express';
import path from 'path';
import multer from 'multer';

interface MulterRequest extends Request {
  files?: Array<any>;
}

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve('public/form.html'));
});

app.get('/success', (req: Request, res: Response) => {
  res.sendFile(path.resolve('public/success.html'));
});

app.get('/error', (req: Request, res: Response) => {
  res.sendFile(path.resolve('public/error.html'));
});

app.post('/upload', upload.single('arquivo'), (req: Request, res: Response) => {
  console.log(req.file);

  if (req.file.size > 0) {
    res.redirect('success');
  } else {
    res.redirect('error');
  }
});

app.post('/uploads', upload.array('arquivos'), (req: MulterRequest, res: Response) => {
  console.log(req.files);

  if (req.files.length > 0) {
    res.redirect('success');
  } else {
    res.redirect('error');
  }
});

app.listen(3000, () => console.log('Servidor inicializado'));