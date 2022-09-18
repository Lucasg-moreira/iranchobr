import express from "express";
import cors from "cors";
import conn from "./db/conn.js";

import Pessoas from "./models/Pessoas.js";
import Animais from "./models/Animais.js";
import AnimalLote from "./models/AnimalLote.js";

import routesPessoas from "./routes/routesPessoas.js";
import routesAnimal from "./routes/routerAnimal.js";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use("/pessoas", routesPessoas);
app.use("/animais", routesAnimal);
conn
  .sync()
  .then(app.listen(3000))
  .catch((err) => {
    if (err) throw err;
  });
