import express, { Router } from 'express';

import PessoasController from '../controllers/PessoasController.js';

const routes = express.Router();

routes.get("/", PessoasController.show)
routes.post("/add", PessoasController.store)
routes.delete("/:id/remove", PessoasController.remove)

export default routes;