import { Sequelize } from "sequelize";

let sequelize = new Sequelize("cadastrobasico", "root", "Outubro2007", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Conexão bem-sucedida"))
  .catch((error) => console.log(error));

export default {
  sequelize: sequelize,
  Sequelize: Sequelize,
};
