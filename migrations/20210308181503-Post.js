"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("posts", {
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
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("posts");
  },
};
