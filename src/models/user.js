const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    password: {
        type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;