import express from'express';

import { routes } from './routes.js';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor iniciado com sucesso.");
});

// MVC - Model, View & Controller
// 1. Controller - Controlador
// 2. Services - Lógicas de negócio
// 3. Repositories - Persistência dos dados
