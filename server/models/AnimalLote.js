import { DataTypes } from "sequelize";
import db from "../db/conn.js";
import Animais from "./Animais.js";

const AnimalLote = db.define("Animal_lote", {
  no_lote: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ds_lote: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
export default AnimalLote;
