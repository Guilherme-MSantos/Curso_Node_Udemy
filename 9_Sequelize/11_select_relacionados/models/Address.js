const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Address = db.define("Address", {
  street: {
    type: DataTypes.STRING,
    required: true,
  },
  number: {
    type: DataTypes.STRING,
    required: true,
  },
  city: {
    type: DataTypes.STRING,
    required: true,
  },
});

User.hasMany(Address); // um User pode ter vários endereços , porem um endereço so pode ter um user

Address.belongsTo(User); // relacionamento : address pertence a user

module.exports = Address;
