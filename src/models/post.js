const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Post = sequelize.define(
  "posts",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: Sequelize.INTEGER,
      references: {
        model: "categorys",
        key: "id",
      },
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.STRING,
    },
    keys: {
      type: Sequelize.STRING,
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

module.exports = Post;
