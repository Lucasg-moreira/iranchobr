import { Sequelize } from "sequelize";

const sequelize = new Sequelize("irancho_br", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conexão estabelecida com banco de dados.");
} catch (err) {
  if (err) throw err;
}


export default sequelize;