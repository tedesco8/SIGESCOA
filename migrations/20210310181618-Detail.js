"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("detail_sales", {
      //identificacion
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      //venta
      sale: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: "CASCADE",
        references: {
          model: "sales",
          key: "id",
        },
      },
      //articulo
      article: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "articles",
          key: "id",
        },
      },
      //cantidad
      amount: {
        type: Sequelize.INTEGER,
      },
      //precio
      price: {
        type: Sequelize.DECIMAL(11, 2),
      },
      //fecha creado
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      //fecha actualizado
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("details");
  },
};
