import { DataTypes } from "sequelize";

import db from "../db/conn.js";

const Pessoas = db.define("Pessoas", {
  no_pessoa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  no_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  ic_ativo: { type: DataTypes.BOOLEAN },
});
export default Pessoas;
