import { DataTypes } from "sequelize";
import conexao from "./conexao.js";

const table = conexao.sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

//table.sync({ force: true });

export default table;
