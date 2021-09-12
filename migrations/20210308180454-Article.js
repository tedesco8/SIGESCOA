'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("articles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.INTEGER,
        references: {
          model: "types",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      cost: {
        type: Sequelize.DECIMAL(11,2),
      },
      priceUnity: {
        type: Sequelize.DECIMAL(11,2),
      },
      priceWholesale: {
        type: Sequelize.DECIMAL(11,2),
      },
      stock: {
          type: Sequelize.INTEGER
      },
      image: {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("articles");
  },
};
