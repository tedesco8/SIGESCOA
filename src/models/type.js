const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Type = sequelize.define(
  "types",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
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

module.exports = Type;
