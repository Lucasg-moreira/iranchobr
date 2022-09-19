import express, { Router } from 'express';

import AnimalController from '../controllers/AnimalController.js';

const routes = express.Router();

routes.post("/update", AnimalController.update)
routes.get("/:user_id", AnimalController.index)
routes.delete("/remove/:id", AnimalController.remove)
routes.post("/add/:user_id", AnimalController.store)

export default routes;