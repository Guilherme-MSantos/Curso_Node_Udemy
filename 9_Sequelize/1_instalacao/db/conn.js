// Precisa instalar o mysql2 para que ele funcione
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodeSequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("A conexão foi um sucesso");
} catch (error) {
  console.log("Não foi possível conectar devido ao erro : ", error);
}

module.exports = sequelize;
