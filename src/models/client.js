const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Client = sequelize.define(
  "clients",
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
    password: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
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

module.exports = Client;
