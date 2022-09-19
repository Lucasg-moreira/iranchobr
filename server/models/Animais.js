import { DataTypes } from "sequelize";

import db from "../db/conn.js";

import Pessoas from "./Pessoas.js";

const Animais = db.define("Animais", {
  id_fazenda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  no_animal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  no_raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  dt_nascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  vr_peso: {
    type: DataTypes.INTEGER,
  }
});
Animais.belongsTo(Pessoas)

export default Animais;