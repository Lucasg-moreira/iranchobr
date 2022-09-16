import express, { Router } from 'express';

import AnimalController from '../controllers/AnimalController.js';

const routes = express.Router();

routes.get("/:user_id", AnimalController.index)
routes.post("/add/:user_id", AnimalController.store)

export default routes;