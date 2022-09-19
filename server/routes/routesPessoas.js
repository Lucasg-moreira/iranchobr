import express, { Router } from 'express';

import PessoasController from '../controllers/PessoasController.js';

const routes = express.Router();

routes.get("/", PessoasController.show)
routes.get("/:id", PessoasController.showOne)
routes.post("/add", PessoasController.store)
routes.post("/:id/update", PessoasController.update)
routes.delete("/:id/remove", PessoasController.remove)

export default routes;