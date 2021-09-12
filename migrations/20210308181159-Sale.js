"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("sales", {
      //identificacion
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      //cliente
      client: {
        type: Sequelize.INTEGER,
        references: {
          model: "clients",
          key: "id",
        },
      },
      //usuario
      user: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      //tipo comprobante
      voucherType: {
        type: Sequelize.STRING,
      },
      //serie comprobante
      voucherSeries: {
        type: Sequelize.STRING,
      },
      //num comprobante
      voucherNum: {
        type: Sequelize.STRING,
      },
      //impuesto
      tax: {
        type: Sequelize.DECIMAL(4, 2),
      },
      //total
      total: {
        type: Sequelize.DECIMAL(11, 2),
      },
      //pago
      payment: {
        type: Sequelize.BOOLEAN,
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("sales");
  },
};
