import { DataTypes } from "sequelize";
import db from "../db/conn.js";

const AnimalLote = db.define("Animal_x_lote", {
  dt_entrada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fk_lote: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "animal_lotes", key: "id"},
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  fk_animal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "animais", key: "id"},
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  dt_saida: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ic_bezerro: {
    type: DataTypes.STRING,
  },
});

export default AnimalLote;
